import{j as i}from"./iframe-yLJxkVzB.js";import{O as p}from"./object-table-BjJ7VNCo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DP8MNLom.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BvwH_ZL2.js";import"./index-nIKj5uY4.js";import"./Dialog-2IuBkREG.js";import"./cross-Owpme9BE.js";import"./svgIconContainer-TK-Ji3z6.js";import"./useBaseUiId-C2QLSnG8.js";import"./InternalBackdrop-BBxC8DKB.js";import"./composite-dCt9YpUk.js";import"./index-BA5McYn9.js";import"./index-DfLe8XpU.js";import"./index-CozEKZMT.js";import"./useEventCallback-fdgxuXgo.js";import"./SkeletonBar-DZZlKsf1.js";import"./LoadingCell-CUdyrdoA.js";import"./ColumnConfigDialog-DQt6LAOo.js";import"./DraggableList-Dl4LF87d.js";import"./search-B5yRV9xp.js";import"./Input-CPmagxfJ.js";import"./useControlled-CJJ5Ltiy.js";import"./Button-wUttMbxG.js";import"./small-cross-CG34SVyC.js";import"./ActionButton-Clr_BQ-v.js";import"./Checkbox-Cy7DSLTa.js";import"./useValueChanged-BAqw25z8.js";import"./CollapsiblePanel-DgS9WHma.js";import"./MultiColumnSortDialog-DXJkaF5P.js";import"./MenuTrigger-CTEiO2Bu.js";import"./CompositeItem-Bteys6EZ.js";import"./ToolbarRootContext-LMgR1PX5.js";import"./getDisabledMountTransitionStyles-Dokq89QC.js";import"./getPseudoElementBounds-B28lIi_Q.js";import"./chevron-down-NEt8c7o4.js";import"./index-vF_-Jyj8.js";import"./error-CkjCJkJz.js";import"./BaseCbacBanner-BLXv67Yn.js";import"./makeExternalStore-BrbywmR6.js";import"./Tooltip-D82BZFwQ.js";import"./PopoverPopup-DvlntHwZ.js";import"./debounce-CAdN6VB_.js";import"./useOsdkClient-BeKNNCDt.js";import"./tick-BN9LdMqy.js";import"./DropdownField-BBTmJj7c.js";import"./isEqual-BU8jNfNb.js";import"./withOsdkMetrics-EW4d60np.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
