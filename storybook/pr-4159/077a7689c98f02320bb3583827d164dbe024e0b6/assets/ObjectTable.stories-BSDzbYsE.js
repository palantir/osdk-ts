import{j as i}from"./iframe-BqwXQKpA.js";import{O as p}from"./object-table-CuuBfL8J.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DkLzoQCM.js";import"./preload-helper-CPn3kR4s.js";import"./Table-DZ6bvBAp.js";import"./index-CYwWJaLD.js";import"./Dialog-Dp3EsUox.js";import"./cross-CedSfFXt.js";import"./svgIconContainer-r8u0NG4v.js";import"./useBaseUiId-DA7_UCFd.js";import"./InternalBackdrop-BKOhgmyu.js";import"./composite-Bp-cKdPO.js";import"./index-C72iR5_f.js";import"./index-jZeUOwty.js";import"./index-8nJMg384.js";import"./useEventCallback-Cv2hevdH.js";import"./SkeletonBar-ZCxSjfu7.js";import"./LoadingCell-DQMmvmgu.js";import"./ColumnConfigDialog-DCLkqrVc.js";import"./DraggableList-DqQhEMPD.js";import"./search-1XCyntXF.js";import"./Input-DTs9C08W.js";import"./useControlled-BcFAz7-u.js";import"./Button-DZqTJuVj.js";import"./small-cross-ClthSwzC.js";import"./ActionButton-BAZu2Krn.js";import"./Checkbox-D7v3Sdtf.js";import"./useValueChanged-CCMKETAO.js";import"./CollapsiblePanel-OwoGrBMO.js";import"./MultiColumnSortDialog-DtjY-7OY.js";import"./MenuTrigger-bU0oA_1O.js";import"./CompositeItem-DhjczCvx.js";import"./ToolbarRootContext-D7_GPkI_.js";import"./getDisabledMountTransitionStyles-BfGLnaja.js";import"./getPseudoElementBounds-DZfA0kMC.js";import"./chevron-down-Dhf3bz-4.js";import"./index-BmvdlYct.js";import"./error-CT5yNLGi.js";import"./BaseCbacBanner-BGfTp9D9.js";import"./makeExternalStore-CyyUqBSG.js";import"./Tooltip-Bk8ovUyB.js";import"./PopoverPopup-nFVTJuTn.js";import"./debounce-BqMuZJVi.js";import"./useOsdkClient-r71R63wR.js";import"./tick-BEDQHRbq.js";import"./DropdownField-QmoT8zOZ.js";import"./isEqual-CSC2yrxv.js";import"./withOsdkMetrics-p_rJ049m.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
