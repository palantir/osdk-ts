import{j as i}from"./iframe-B5xJqKl6.js";import{O as p}from"./object-table-DwE4jvCR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-IxKVvTbk.js";import"./preload-helper-Ne8FQQgc.js";import"./Table-gEZqVGDT.js";import"./index-CCjfPqEl.js";import"./Dialog-SyGpH5VH.js";import"./cross-C5VNjLCx.js";import"./svgIconContainer-B69lMk25.js";import"./useBaseUiId-Cotk4UXc.js";import"./InternalBackdrop-Dli4x5Y-.js";import"./composite-BjyS4v5o.js";import"./index-D_ZLDl4o.js";import"./index-CGviHfV1.js";import"./index-B9wtWaws.js";import"./useEventCallback-B6wls_4_.js";import"./SkeletonBar-DS-T5Kqb.js";import"./LoadingCell-MMAiHjE-.js";import"./ColumnConfigDialog-BNbNgfGJ.js";import"./DraggableList-CdjZOjeo.js";import"./search-DaqXKDSx.js";import"./Input-WDAACwdq.js";import"./useControlled-Cyv6PlBx.js";import"./Button-qyC1OAbF.js";import"./small-cross-c3hXIKIB.js";import"./ActionButton-g8wW2xvY.js";import"./Checkbox-DqtOkUXo.js";import"./useValueChanged-CF6aBjQN.js";import"./CollapsiblePanel-DsqAKcOa.js";import"./MultiColumnSortDialog-DLlNszC6.js";import"./MenuTrigger-DhC3ynmP.js";import"./CompositeItem-CLpB1ycb.js";import"./ToolbarRootContext-C6Gq0LMZ.js";import"./getDisabledMountTransitionStyles-C7T2cCRj.js";import"./getPseudoElementBounds-Ba9IoLmx.js";import"./chevron-down-Dbn0Vtw3.js";import"./index-6kBwbZOO.js";import"./error-DFd4_H53.js";import"./BaseCbacBanner-C41b3Hb_.js";import"./makeExternalStore-DLfdYAzs.js";import"./Tooltip-CDTxO2q6.js";import"./PopoverPopup-D9OmGnX9.js";import"./debounce-DnGe1WPS.js";import"./useOsdkClient-tqT3GVR2.js";import"./tick-CRsinXX8.js";import"./DropdownField-B-xEEli2.js";import"./isEqual-BLcwcQGd.js";import"./withOsdkMetrics-DKzJkasc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
