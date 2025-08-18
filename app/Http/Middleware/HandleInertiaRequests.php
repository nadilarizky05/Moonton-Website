<?php

namespace App\Http\Middleware;

use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Session;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */

    private function activePlan(){
        $activePlan = Auth::user() ? Auth::user()->LastActiveUserSubscription : null;
        if (!$activePlan) {
            return null;
        }

        $lastDay = Carbon::parse($activePlan->updated_at)->addMonth($activePlan->subscriptionPlan->active_period_in_month);
        $activeDays = (int) Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
        $remainingActiveDays = (int) Carbon::now()->diffInDays(Carbon::parse($activePlan->expired_date));

        return [
            'name' => $activePlan->subscriptionPlan->name,
            'remainingActiveDays' => $remainingActiveDays,
            'activeDays' => $activeDays
        ];
    }

    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'activePlan' => $this->activePlan()
            ],
            'env' => [
                'MIDTRANS_CLIENTKEY' => env('MIDTRANS_CLIENTKEY')
            ],
            'flashMessage' => [
                'message' => Session::get('message'),
                'type' => Session::get('type')
            ],
        ];
    }
}
