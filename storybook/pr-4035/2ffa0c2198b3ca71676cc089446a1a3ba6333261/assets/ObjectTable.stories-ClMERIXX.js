import{j as i}from"./iframe-DA9dclNV.js";import{O as p}from"./object-table-LtoG5sfp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-9LxBMz5g.js";import"./preload-helper-Bx64lG7g.js";import"./Table-BCWTUx35.js";import"./index-kn43Hsx3.js";import"./Dialog-A-l1sJaY.js";import"./cross-Db3CMctj.js";import"./svgIconContainer-CdmY4bEV.js";import"./useBaseUiId-_qFsZVnk.js";import"./InternalBackdrop-DvR7fsn8.js";import"./composite-CayJIHWq.js";import"./index-ByvNBIsG.js";import"./index-DkDw_XlI.js";import"./index-CzHCOOLi.js";import"./useEventCallback-DI6z4bpK.js";import"./SkeletonBar-BkicTxkg.js";import"./LoadingCell-CFE_0ygU.js";import"./ColumnConfigDialog-BNsWj8YS.js";import"./DraggableList-DOjDpghY.js";import"./search-CsCC8gU7.js";import"./Input-xbm-V7-x.js";import"./useControlled-DOm30eCY.js";import"./Button-6VSTuqQC.js";import"./small-cross-1vdYgDXh.js";import"./ActionButton-aOr6P1Sc.js";import"./Checkbox-1wmPd_MM.js";import"./useValueChanged-ByrE0fn3.js";import"./CollapsiblePanel-CQ1HbAul.js";import"./MultiColumnSortDialog-Co2LVOgM.js";import"./MenuTrigger-DHh-Y8_X.js";import"./CompositeItem-21cMzz5_.js";import"./ToolbarRootContext-tV_1SIt_.js";import"./getDisabledMountTransitionStyles-BijzmGMm.js";import"./getPseudoElementBounds-CnYd-v8a.js";import"./chevron-down-DC0K_Daw.js";import"./index-Bz8vlsKZ.js";import"./error-DHS0vKCT.js";import"./BaseCbacBanner-DgYcjeca.js";import"./makeExternalStore-BYx66Bfu.js";import"./Tooltip-Kcrn1yWM.js";import"./PopoverPopup-BbeJMqJB.js";import"./debounce-WmNVgQD9.js";import"./useOsdkClient-pjJiOzt2.js";import"./tick-DZkClMaT.js";import"./DropdownField-97vatCOJ.js";import"./isEqual-R0aPEYDK.js";import"./withOsdkMetrics-BeJRVpQP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
