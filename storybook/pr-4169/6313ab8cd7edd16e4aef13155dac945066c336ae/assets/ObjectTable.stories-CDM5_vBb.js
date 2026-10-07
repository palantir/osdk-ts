import{j as i}from"./iframe-Cwq9LQgh.js";import{O as p}from"./object-table-DUYwzwT-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CFHjKjyA.js";import"./preload-helper-BwR6Pfp9.js";import"./Table-DBQdFyjh.js";import"./index-CtMIqXL_.js";import"./Dialog-BtzdOpOy.js";import"./cross-Dfvafrcv.js";import"./svgIconContainer-Dbb1xWM-.js";import"./useBaseUiId-D-o9ssMY.js";import"./InternalBackdrop-W9C_vQZ5.js";import"./composite-CN6FxDtP.js";import"./index-DWCgAU1r.js";import"./index-BEyE-4n9.js";import"./index-C6OOeUvK.js";import"./useEventCallback-Dvol8fVg.js";import"./SkeletonBar-ZRgqtK8J.js";import"./LoadingCell-BJ2ttYqs.js";import"./ColumnConfigDialog-Bt3KOXHF.js";import"./DraggableList-PJTZj0V4.js";import"./search-DyrwlR15.js";import"./Input-COyT4omE.js";import"./useControlled-BO63cc37.js";import"./Button-C7rjw-Q7.js";import"./small-cross-CmJytNPv.js";import"./ActionButton-DGHUEF7_.js";import"./Checkbox-CyIf6GSG.js";import"./useValueChanged-DfaWuJmu.js";import"./CollapsiblePanel-fliMZylf.js";import"./MultiColumnSortDialog-D-Dhg4ie.js";import"./MenuTrigger-C2camDfs.js";import"./CompositeItem-B62zciM4.js";import"./ToolbarRootContext-nSskdiih.js";import"./getDisabledMountTransitionStyles-EwNk7y8k.js";import"./getPseudoElementBounds-coD1VMym.js";import"./chevron-down-Cm38Y6L5.js";import"./index-C9VhUtVl.js";import"./error-DXeSegvi.js";import"./BaseCbacBanner-CYI7KT6N.js";import"./makeExternalStore-DDN6NSWJ.js";import"./Tooltip-BfRGVA3r.js";import"./PopoverPopup-CiWAYdx8.js";import"./debounce-VeRvPs6A.js";import"./useOsdkClient-CYpWzT_O.js";import"./tick-Stga4Wt2.js";import"./DropdownField-pOrv2Wux.js";import"./isEqual-DTFGN-6w.js";import"./withOsdkMetrics-CKuskwhT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
