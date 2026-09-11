import{j as i}from"./iframe-BsJOdbCL.js";import{O as p}from"./object-table-Dp1R9NCg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B6F66l6F.js";import"./preload-helper-DxS_Velh.js";import"./Table-Daf9LopS.js";import"./index-BqujQTW3.js";import"./Dialog-BQfhl9fd.js";import"./cross-Bxqdiez_.js";import"./svgIconContainer-CrnbMK0b.js";import"./useBaseUiId-CB5lNuw3.js";import"./InternalBackdrop-B2GNz5hu.js";import"./composite-CaVgyQab.js";import"./index-CEwR0XXE.js";import"./index-rSFhfOaH.js";import"./index-D_l1l0Yv.js";import"./useEventCallback-BINgInB_.js";import"./SkeletonBar-CeSQZW6w.js";import"./LoadingCell-D9LiPaaJ.js";import"./ColumnConfigDialog-nFVX_AzW.js";import"./DraggableList-Bb6he5CK.js";import"./search-DGRADUpj.js";import"./Input-BYGlPWDj.js";import"./useControlled-7DT6e4WZ.js";import"./Button-CWQ0OGf8.js";import"./small-cross-D1GEAGXQ.js";import"./ActionButton-JWlqJiJ4.js";import"./Checkbox-HV55hq3D.js";import"./useValueChanged-T_IVy1TV.js";import"./CollapsiblePanel-DMdta-mT.js";import"./MultiColumnSortDialog-yapUVthL.js";import"./MenuTrigger-jQfAwnOD.js";import"./CompositeItem-BS607TGd.js";import"./ToolbarRootContext-DI-YguYW.js";import"./getDisabledMountTransitionStyles-DqSxt_J-.js";import"./getPseudoElementBounds-CXXR7gCg.js";import"./chevron-down-CLIxImQx.js";import"./index-BwHn30HN.js";import"./error-Btl7YeDY.js";import"./BaseCbacBanner-Mp7AFB5Z.js";import"./makeExternalStore-DWYVyprO.js";import"./Tooltip-cqHh73tY.js";import"./PopoverPopup-BGpU1k4a.js";import"./debounce-MidBPb8y.js";import"./useOsdkClient-CHvyPAtQ.js";import"./tick-DnQLWeom.js";import"./DropdownField-BBHxtCFQ.js";import"./isEqual-DEGlTRmV.js";import"./withOsdkMetrics-DV_LS9FP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
