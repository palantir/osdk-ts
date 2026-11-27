import{j as i}from"./iframe-BKkgtFSo.js";import{O as p}from"./object-table-BH4cY394.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DGB39KDC.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-eE5th-G5.js";import"./index-Dvbp0kPd.js";import"./NonIdealState-CcUJbrpE.js";import"./Dialog-C2aH1HrO.js";import"./cross-5K119jUx.js";import"./svgIconContainer-Ce9VGxQH.js";import"./useBaseUiId-BfmvZ33T.js";import"./InternalBackdrop-BpRAUWPw.js";import"./composite-CVFofIE7.js";import"./index-CNoy-iis.js";import"./index-BDs07rBu.js";import"./index-1AbeELNr.js";import"./SkeletonBar-DCi4lVfd.js";import"./LoadingCell-Do8SUb-f.js";import"./ColumnConfigDialog-CTuntdU9.js";import"./DraggableList-ByCpmkMe.js";import"./search-VxZ7VsjM.js";import"./Input-ajiamWew.js";import"./useControlled-CiCRPIrb.js";import"./Button-D0Mtf1Wu.js";import"./small-cross-D5_9Jwec.js";import"./ActionButton-DkNjySCa.js";import"./Checkbox-BRVfPQgc.js";import"./useValueChanged-BVys5dm-.js";import"./CollapsiblePanel-BB19Mn1b.js";import"./MultiColumnSortDialog-BH0ZXCbZ.js";import"./MenuTrigger-B3ghwpLY.js";import"./CompositeItem-B3A9StDG.js";import"./ToolbarRootContext-CGelScnS.js";import"./getDisabledMountTransitionStyles-X8rUrkvt.js";import"./getPseudoElementBounds-C1szzxdu.js";import"./chevron-down-C5BYt7gU.js";import"./index-CVd367Vi.js";import"./error-DeWUfdBM.js";import"./BaseCbacBanner-DqJ_osEB.js";import"./makeExternalStore-Qrh_OJH6.js";import"./Tooltip-Br4k1WIE.js";import"./PopoverPopup-Dkt2NgPN.js";import"./Select-CQIz6wip.js";import"./useOsdkClient-DFktUr12.js";import"./tick-Ch6cMwoK.js";import"./DropdownField-DT-aa1rt.js";import"./useDebouncedCallback-BzoQ_1l9.js";import"./isEqual-COOSB5_T.js";import"./_baseIsEqual-D4aVuU6Y.js";import"./stableSerialize-D_7L0Ei9.js";import"./withOsdkMetrics-Bs5QRS3m.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,Te={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const fe=["Default"];export{n as Default,fe as __namedExportsOrder,Te as default};
