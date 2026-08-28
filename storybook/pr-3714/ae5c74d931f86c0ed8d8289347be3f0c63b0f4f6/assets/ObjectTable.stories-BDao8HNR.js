import{j as i}from"./iframe-Dhbwn5Pb.js";import{O as p}from"./object-table-UrEffzOv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D4LpDDNx.js";import"./preload-helper-bx9mJ_N7.js";import"./Table-B3YRrRlZ.js";import"./index-beyiGhUz.js";import"./Dialog-focCsRQJ.js";import"./cross-Oe6Btsjt.js";import"./svgIconContainer-DQD_ILj4.js";import"./useBaseUiId-B8Sr3cV5.js";import"./InternalBackdrop-yGDTZBSI.js";import"./composite-DZfjqgHR.js";import"./index-BVg28YTW.js";import"./index-DujXq81U.js";import"./index-DTSqUghB.js";import"./useEventCallback--vNLEjXF.js";import"./SkeletonBar-DWQCheBK.js";import"./LoadingCell-DrMFjSlt.js";import"./ColumnConfigDialog-DxtBsJsS.js";import"./DraggableList-Tv392NfW.js";import"./search-1Sqhs6Wh.js";import"./Input-CbPVVR1a.js";import"./useControlled-C4j_XYHH.js";import"./Button-BRPJGwxW.js";import"./small-cross-DuhAL6sr.js";import"./ActionButton-B714-oEm.js";import"./Checkbox-Bh2TmZNs.js";import"./useValueChanged-BcgYf_g-.js";import"./CollapsiblePanel-CGEmJ7pB.js";import"./MultiColumnSortDialog-BG09muaJ.js";import"./MenuTrigger-Hd_x8Ak_.js";import"./CompositeItem-BvS25tKG.js";import"./ToolbarRootContext-DI7_yhQw.js";import"./getDisabledMountTransitionStyles-C1EOoGPU.js";import"./getPseudoElementBounds-DQR1f6L-.js";import"./chevron-down-D6HRZEJG.js";import"./index-CSnnu_0b.js";import"./error-DfBoM4j6.js";import"./BaseCbacBanner-DotI8txE.js";import"./makeExternalStore-BGED5qiE.js";import"./Tooltip-DfNwoZw4.js";import"./PopoverPopup-CF_q1uQg.js";import"./debounce-DvsBo_aI.js";import"./useOsdkClient-BHE0QTWa.js";import"./tick-BaNVK8r4.js";import"./DropdownField-CafXZJuf.js";import"./isEqual-BM_17_wf.js";import"./withOsdkMetrics-ptN3vt6M.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
