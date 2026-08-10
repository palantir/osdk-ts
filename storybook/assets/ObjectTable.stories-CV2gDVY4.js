import{j as i}from"./iframe-CiPu_-J4.js";import{O as p}from"./object-table-BmML7npE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cwz_cv8p.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Cx_7U_Ih.js";import"./index-Bm0FtcPZ.js";import"./Dialog-eIctsCEH.js";import"./cross-Ca8iEZbR.js";import"./svgIconContainer-q0Pmv2d6.js";import"./useBaseUiId-C4cVz7Q6.js";import"./InternalBackdrop-CxYaPIJa.js";import"./composite-_cFRdRXY.js";import"./index-BvYm8X_W.js";import"./index-C2E71xpw.js";import"./index-CuiSH8el.js";import"./useEventCallback-DbFdZROs.js";import"./SkeletonBar-HE_lhZzX.js";import"./LoadingCell-CEAZmJyx.js";import"./ColumnConfigDialog-CbMiEeYO.js";import"./DraggableList-Cd-jQOxp.js";import"./search-B6nAZCB8.js";import"./Input-CbZwBqZS.js";import"./useControlled-Dt8lqEeV.js";import"./isEqual-BfBzp-0I.js";import"./isObject-BabYusV9.js";import"./Button-7FNOSjqj.js";import"./ActionButton-CYVwfbC8.js";import"./Checkbox-BnqpS-BU.js";import"./useValueChanged-C7YR8ezH.js";import"./CollapsiblePanel-ecEvpN-h.js";import"./MultiColumnSortDialog-BPPPJqbl.js";import"./MenuTrigger-D0T4_Y2P.js";import"./CompositeItem-B_4iwGUS.js";import"./ToolbarRootContext-CbmIJYSD.js";import"./getDisabledMountTransitionStyles-BJAwupJb.js";import"./getPseudoElementBounds-BwxqFIvl.js";import"./chevron-down-DeoFD6hB.js";import"./index-BlspZBuR.js";import"./error-BQWuaF69.js";import"./BaseCbacBanner-CF7RuGKw.js";import"./makeExternalStore-CMzFaru2.js";import"./Tooltip-CSuzWKqG.js";import"./PopoverPopup-ChN5TvmN.js";import"./toNumber-lSVnxv3w.js";import"./useOsdkClient-CXQzKmLd.js";import"./tick-Dh1KejZv.js";import"./DropdownField-Dw3v98hE.js";import"./withOsdkMetrics-BJsy9tin.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
