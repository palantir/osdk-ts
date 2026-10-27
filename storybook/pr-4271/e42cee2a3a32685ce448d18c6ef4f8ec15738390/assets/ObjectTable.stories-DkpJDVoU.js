import{j as i}from"./iframe-CEC11uQP.js";import{O as p}from"./object-table-DuMgzKLf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-yrybIQBf.js";import"./preload-helper-DVVUuTHt.js";import"./Table-Be2vb7Zf.js";import"./index-PEoHNwfg.js";import"./Dialog-L3YbwTo_.js";import"./cross-D6kuzFqN.js";import"./svgIconContainer-CbD2_3IP.js";import"./useBaseUiId-BjpGd3DR.js";import"./InternalBackdrop-CwSZ3wqn.js";import"./composite-CmpMqd5k.js";import"./index-DrOphgIM.js";import"./index-B-Y9FXdo.js";import"./index-D7YNV7up.js";import"./useEventCallback-KH16WOxt.js";import"./SkeletonBar-CrVBs6Vj.js";import"./LoadingCell-DXUfmLgb.js";import"./ColumnConfigDialog-D6xjtDrO.js";import"./DraggableList-CIWCgkjr.js";import"./search-3jERTaIF.js";import"./Input-DBrhN4gs.js";import"./useControlled-DZwN9m8e.js";import"./Button-BJ7HsXYN.js";import"./small-cross-vfExAlhb.js";import"./ActionButton-D1g9DkB7.js";import"./Checkbox-CkA-twbz.js";import"./useValueChanged-DHCnr_zs.js";import"./CollapsiblePanel-DZwBeyX6.js";import"./MultiColumnSortDialog-rOt7hj7e.js";import"./MenuTrigger-CllGpCQB.js";import"./CompositeItem-Aj4qkjGh.js";import"./ToolbarRootContext-DUQNKsvO.js";import"./getDisabledMountTransitionStyles-jPjQ6amA.js";import"./getPseudoElementBounds-BITuD01w.js";import"./chevron-down-6kcuRK_B.js";import"./index-pK9n0EOx.js";import"./error-BC-ullpf.js";import"./BaseCbacBanner-BBrLfPZM.js";import"./makeExternalStore-BiM7hkBW.js";import"./Tooltip-CErMPFwN.js";import"./PopoverPopup-B-89m5SN.js";import"./debounce-DRRXJPFm.js";import"./useOsdkClient-_hJ9ISKZ.js";import"./tick-CrTzZGEG.js";import"./DropdownField-D7RrB7x7.js";import"./isEqual-BW6LqVFQ.js";import"./withOsdkMetrics-CHiNkmki.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
