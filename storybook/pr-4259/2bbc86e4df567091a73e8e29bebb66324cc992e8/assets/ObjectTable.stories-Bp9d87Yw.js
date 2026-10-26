import{j as i}from"./iframe-DgHq46dL.js";import{O as p}from"./object-table-B1bhT_Ev.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BydMPPvX.js";import"./preload-helper-2OibLDKZ.js";import"./Table-BW-cZJps.js";import"./index-BhPwX7yA.js";import"./Dialog-CfUAJ5Id.js";import"./cross-kmyKn-Hd.js";import"./svgIconContainer-D-eVzjwP.js";import"./useBaseUiId-DraHxLhq.js";import"./InternalBackdrop-BUAi9chw.js";import"./composite-B03IEoiJ.js";import"./index-pFDv9Z-0.js";import"./index-oCxycBs6.js";import"./index-BRwM8whp.js";import"./useEventCallback-xbbbX8qB.js";import"./SkeletonBar-_tavPjlr.js";import"./LoadingCell-Dt4wFO8Z.js";import"./ColumnConfigDialog-mKt1jQlT.js";import"./DraggableList-CN2YLXt6.js";import"./search-DW3-Ki40.js";import"./Input-o88S38RY.js";import"./useControlled-C_PKKkAE.js";import"./Button-CSx6Joum.js";import"./small-cross-DhXPHsHQ.js";import"./ActionButton-DUzQV33t.js";import"./Checkbox-CQr_pjeY.js";import"./useValueChanged-ENf__CxN.js";import"./CollapsiblePanel-CZZTgzig.js";import"./MultiColumnSortDialog-CfT6ktlR.js";import"./MenuTrigger-XgVinso0.js";import"./CompositeItem-BY7KoFBl.js";import"./ToolbarRootContext-CNYHni6P.js";import"./getDisabledMountTransitionStyles-Ce2xSAU9.js";import"./getPseudoElementBounds-DBFuRRXN.js";import"./chevron-down-BFQTfWqg.js";import"./index-Jhdjr3A-.js";import"./error-D8zFMP2p.js";import"./BaseCbacBanner-Co-b00WN.js";import"./makeExternalStore-D1CTkdeT.js";import"./Tooltip-b-GnJ4b5.js";import"./PopoverPopup-Bpii6JB2.js";import"./debounce-gBlNcefK.js";import"./useOsdkClient-Cx_VxcYG.js";import"./tick-BcwK5wdE.js";import"./DropdownField-B3ISwKsz.js";import"./isEqual-C1tKOgi9.js";import"./withOsdkMetrics-CAH3qcfi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
