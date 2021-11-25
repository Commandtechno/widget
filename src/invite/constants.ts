import { WHITE, DARK_GRAY, LIGHT_GRAY, ONLINE, OFFLINE } from "../colors";

export const X = 0;
export const Y = 0;
export const WIDTH = 432;
export const HEIGHT = 110;
export const RADIUS = 4;
export const BACKGROUND = DARK_GRAY;

export const PADDING = 16;
export const CONTENT_X = PADDING;
export const CONTENT_Y = PADDING;
export const CONTENT_WIDTH = WIDTH - 16 * 2;
export const CONTENT_HEIGHT = HEIGHT - 16 * 2;

export const TEXT_X = 0;
export const TEXT_Y = 0;
export const TEXT_WIDTH = CONTENT_WIDTH;
export const TEXT_HEIGHT = 16;
export const TEXT_MARGIN = 12;
export const TEXT_SIZE = 12;
export const TEXT_COLOR = LIGHT_GRAY;

export const SERVER_X = 0;
export const SERVER_Y = TEXT_SIZE + TEXT_MARGIN;
export const SERVER_WIDTH = CONTENT_WIDTH;
export const SERVER_HEIGHT = CONTENT_HEIGHT - TEXT_HEIGHT;

export const ICON_X = 0;
export const ICON_Y = 0;
export const ICON_WIDTH = 50;
export const ICON_HEIGHT = 50;
export const ICON_MARGIN = 16;
export const ICON_RADIUS = 16;

export const INFO_X = ICON_WIDTH + ICON_MARGIN;
export const INFO_Y = 6;
export const INFO_WIDTH = SERVER_WIDTH - INFO_X;
export const INFO_HEIGHT = ICON_HEIGHT;

export const NAME_X = 0;
export const NAME_Y = 0;
export const NAME_WIDTH = INFO_WIDTH;
export const NAME_HEIGHT = INFO_HEIGHT;
export const NAME_MARGIN = 8;
export const NAME_SIZE = 16;
export const NAME_COLOR = WHITE;

export const COUNTS_X = 0;
export const COUNTS_Y = NAME_SIZE + NAME_MARGIN;
export const COUNTS_WIDTH = INFO_WIDTH;
export const COUNTS_HEIGHT = INFO_HEIGHT;

export const ONLINE_X = 0;
export const ONLINE_Y = 0;
export const ONLINE_WIDTH = COUNTS_WIDTH;
export const ONLINE_HEIGHT = COUNTS_HEIGHT;
export const ONLINE_MARGIN = 8;

export const ONLINE_DOT_X = 0;
export const ONLINE_DOT_Y = 0;
export const ONLINE_DOT_WIDTH = 8;
export const ONLINE_DOT_HEIGHT = 8;
export const ONLINE_DOT_MARGIN = 4;
export const ONLINE_DOT_RADIUS = 4;
export const ONLINE_DOT_COLOR = ONLINE;

export const ONLINE_TEXT_X = ONLINE_DOT_X + ONLINE_DOT_WIDTH + ONLINE_DOT_MARGIN;
export const ONLINE_TEXT_Y = ONLINE_DOT_Y + ONLINE_DOT_HEIGHT / 2; // calculated later
export const ONLINE_TEXT_WIDTH = ONLINE_WIDTH;
export const ONLINE_TEXT_HEIGHT = ONLINE_HEIGHT;
export const ONLINE_TEXT_SIZE = 12;
export const ONLINE_TEXT_COLOR = LIGHT_GRAY;

export const TOTAL_X = ONLINE_TEXT_X + ONLINE_MARGIN; // calculated later
export const TOTAL_Y = 0;
export const TOTAL_WIDTH = COUNTS_WIDTH;
export const TOTAL_HEIGHT = COUNTS_HEIGHT;
export const TOTAL_MARGIN = 8;

export const TOTAL_DOT_X = ONLINE_MARGIN;
export const TOTAL_DOT_Y = 0;
export const TOTAL_DOT_WIDTH = 8;
export const TOTAL_DOT_HEIGHT = 8;
export const TOTAL_DOT_MARGIN = 4;
export const TOTAL_DOT_RADIUS = 4;
export const TOTAL_DOT_COLOR = OFFLINE;

export const TOTAL_TEXT_X = TOTAL_DOT_X + TOTAL_DOT_WIDTH + TOTAL_DOT_MARGIN;
export const TOTAL_TEXT_Y = TOTAL_DOT_Y + TOTAL_DOT_HEIGHT / 2; // calculated later
export const TOTAL_TEXT_WIDTH = TOTAL_WIDTH;
export const TOTAL_TEXT_HEIGHT = TOTAL_HEIGHT;
export const TOTAL_TEXT_SIZE = 12;
export const TOTAL_TEXT_COLOR = LIGHT_GRAY;

export const JOIN_X = 0; // calculated later
export const JOIN_Y = 0;
export const JOIN_WIDTH = 40; // calculated later
export const JOIN_HEIGHT = INFO_HEIGHT - INFO_Y * 2;
export const JOIN_RADIUS = 3;
export const JOIN_COLOR = "#3BA55D";

// export const JOIN_TEXT_X = JOIN_WIDTH / 2; // calculated later
// export const JOIN_TEXT_Y = JOIN_HEIGHT / 2; // calculated later
export const JOIN_TEXT_WIDTH = JOIN_WIDTH;
export const JOIN_TEXT_HEIGHT = JOIN_HEIGHT;
export const JOIN_TEXT_SIZE = 12;
export const JOIN_TEXT_COLOR = WHITE;