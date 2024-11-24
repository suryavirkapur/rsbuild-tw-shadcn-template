export interface DrivingAnalysis {
  lane_centering: {
    following_lane_discipline: boolean;
    score: number;
  };
  following_distance: {
    safe_distance: "safe" | "approximate" | "unsafe";
    score: number;
  };
  signal_compliance: {
    traffic_light: {
      status: "red" | "yellow" | "green";
      compliance: boolean;
      score: number;
    };
    stop_sign: {
      present: boolean;
      compliance: boolean | "N/A";
      score: number;
    };
  };
  merging_lane_change: {
    safe_merging: boolean;
    score: number;
  };
  pedestrian_yielding: {
    pedestrian_present: boolean;
    score: number;
  };
  intersection_behavior: {
    stop_line_observance: boolean;
    score: number;
  };
  road_sign_awareness: {
    speed_limit_sign: {
      visible: boolean;
      observing_limit: "observing" | "exceeding" | "unknown";
      score: number;
    };
    yield_sign: {
      visible: boolean;
      score: number;
    };
  };
  shoulder_use: {
    using_shoulder: boolean;
    score: number;
  };
  comment?: string;
}
