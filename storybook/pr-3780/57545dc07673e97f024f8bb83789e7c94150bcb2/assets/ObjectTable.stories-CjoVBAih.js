import{j as i}from"./iframe-D7EFQRRI.js";import{O as p}from"./object-table-PFoV4XE0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DUcZTscH.js";import"./preload-helper-DBMS08LA.js";import"./Table-BuA6YCn1.js";import"./index-B9Qvampu.js";import"./Dialog-DCtf_D6v.js";import"./cross-DpjEKdZW.js";import"./svgIconContainer-C7NvX0SX.js";import"./useBaseUiId-COi7p9FR.js";import"./InternalBackdrop-4x9DkIt7.js";import"./composite-Cv-Bf0NV.js";import"./index-rAm3g95R.js";import"./index-DDeQJ70A.js";import"./index-Y14U1RM4.js";import"./useEventCallback-GjhSB_CQ.js";import"./SkeletonBar-DW4oEvsQ.js";import"./LoadingCell-CE7jzKHL.js";import"./ColumnConfigDialog-COGB6M-r.js";import"./DraggableList-DS8uCYa1.js";import"./search-BPccI-R0.js";import"./Input-HTLW9b7o.js";import"./useControlled-Cf-FNH0o.js";import"./Button-CJHmLXwA.js";import"./small-cross-DDGaf3lk.js";import"./ActionButton-CCZJngrN.js";import"./Checkbox-BUPWu2pp.js";import"./useValueChanged-uhgfqj97.js";import"./CollapsiblePanel-CBYHu2Hi.js";import"./MultiColumnSortDialog-DWJA7UWz.js";import"./MenuTrigger-ClAX1aQN.js";import"./CompositeItem-CD0LNPn5.js";import"./ToolbarRootContext-D62k46w9.js";import"./getDisabledMountTransitionStyles-CFJHuyCX.js";import"./getPseudoElementBounds-BOIO0YwO.js";import"./chevron-down-i0CR3gCi.js";import"./index-Bs537rs3.js";import"./error-BRWfMQ2f.js";import"./BaseCbacBanner-CT8gtaHE.js";import"./makeExternalStore-BbrBxZRi.js";import"./Tooltip-D15tO1qp.js";import"./PopoverPopup-C_I4MKVN.js";import"./debounce-r8k1w_qp.js";import"./useOsdkClient-BEOdzoOt.js";import"./tick-CI4-naJe.js";import"./DropdownField-DMJHlGEY.js";import"./isEqual-DaJSkNti.js";import"./withOsdkMetrics-B9e4IhYZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
