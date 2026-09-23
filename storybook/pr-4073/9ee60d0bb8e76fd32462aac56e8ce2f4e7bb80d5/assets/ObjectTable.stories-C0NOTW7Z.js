import{j as i}from"./iframe-CWxH_eja.js";import{O as p}from"./object-table-BXJTuTfq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CyvIdQeT.js";import"./preload-helper-BGM-FNNL.js";import"./Table-BSJcDQrS.js";import"./index-rukiLk-t.js";import"./Dialog-D-VrWhQ3.js";import"./cross-BUnzug5D.js";import"./svgIconContainer-BVjwrQj6.js";import"./useBaseUiId-DjXwJ_4A.js";import"./InternalBackdrop-CCMfb0Ir.js";import"./composite--3W2QfLD.js";import"./index-CCBaaayX.js";import"./index-VZEG51bO.js";import"./index-BuFABUNN.js";import"./useEventCallback-CM0vLoXJ.js";import"./SkeletonBar-C3fCQI88.js";import"./LoadingCell-CzHVmTho.js";import"./ColumnConfigDialog-0wXw9w_v.js";import"./DraggableList-ClyJT_sb.js";import"./search-CCiYcsoJ.js";import"./Input-CalfVJQO.js";import"./useControlled-CaUffLu_.js";import"./Button-xLQbkIr8.js";import"./small-cross-C5TdUP9V.js";import"./ActionButton-BHfyzR_2.js";import"./Checkbox-CKMSR4-K.js";import"./useValueChanged-CNmcYNNi.js";import"./CollapsiblePanel-ZhX5L-lI.js";import"./MultiColumnSortDialog-OLhPs4uo.js";import"./MenuTrigger-C4RGeAR7.js";import"./CompositeItem-ClK4GwxV.js";import"./ToolbarRootContext-BeUcIWq0.js";import"./getDisabledMountTransitionStyles-BTSpAzLB.js";import"./getPseudoElementBounds-D46R6mk6.js";import"./chevron-down-CtewQHTT.js";import"./index-91nsioHy.js";import"./error-4ibjlhF7.js";import"./BaseCbacBanner-IKOUH4Um.js";import"./makeExternalStore-MGpOOWzr.js";import"./Tooltip-D1DLlEu4.js";import"./PopoverPopup-B2PZtKL4.js";import"./debounce-CKUoy-ZY.js";import"./useOsdkClient-BEBx1G06.js";import"./tick-Bb30Qkcj.js";import"./DropdownField-BqLWLDk5.js";import"./isEqual-RnyrL87f.js";import"./withOsdkMetrics-BxqDWVVo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
