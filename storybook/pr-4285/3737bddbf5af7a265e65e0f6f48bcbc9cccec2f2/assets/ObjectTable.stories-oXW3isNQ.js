import{j as i}from"./iframe-CiSKHfyc.js";import{O as p}from"./object-table-BUWT5KBZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BrzhVRih.js";import"./preload-helper-CWupNPgO.js";import"./Table-B_RCfvj3.js";import"./index-D3wSasD3.js";import"./Dialog-C7vJczax.js";import"./cross-DLLCkXVB.js";import"./svgIconContainer-BJUr7DHQ.js";import"./useBaseUiId-b_FN5CrC.js";import"./InternalBackdrop-D3k0KQi8.js";import"./composite-jZQCk-zR.js";import"./index-B_PLf88V.js";import"./index-EV91z822.js";import"./index-DiV7dZco.js";import"./useEventCallback-sqYZKM0w.js";import"./SkeletonBar-CPu9e21L.js";import"./LoadingCell-KaZWCKJ4.js";import"./ColumnConfigDialog-BRc4xEVX.js";import"./DraggableList-BfwLO2fI.js";import"./search-DZapC1lH.js";import"./Input-Cul32AIH.js";import"./useControlled-CiZcMD85.js";import"./Button-Cmyv-rnS.js";import"./small-cross-B8GBbM76.js";import"./ActionButton-BQXgRd_a.js";import"./Checkbox-DfjI4tvH.js";import"./useValueChanged-Cy7TI7KD.js";import"./CollapsiblePanel-CI66v9kn.js";import"./MultiColumnSortDialog-BXCUme4L.js";import"./MenuTrigger-BfJwIOVp.js";import"./CompositeItem-_hXBxygC.js";import"./ToolbarRootContext-D7bvCCy6.js";import"./getDisabledMountTransitionStyles-B0YJZ1gZ.js";import"./getPseudoElementBounds-CF1HuyZT.js";import"./chevron-down-D5jrtiFY.js";import"./index-CVFbikLp.js";import"./error-CDPXWVFZ.js";import"./BaseCbacBanner-0rqK7Jap.js";import"./makeExternalStore-BA-q_GW8.js";import"./Tooltip-DEc9D41A.js";import"./PopoverPopup-BFyTaDus.js";import"./debounce-C0MW0JLZ.js";import"./useOsdkClient-rmpyupkX.js";import"./tick-Dt1Daxrw.js";import"./DropdownField-CYqYbFgh.js";import"./isEqual-DBiPhKAB.js";import"./withOsdkMetrics-CWRpGlls.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
