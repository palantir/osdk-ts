import{j as i}from"./iframe-BUTeW6Ke.js";import{O as p}from"./object-table-YhDdHlU-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CcsDFkKQ.js";import"./preload-helper-CQT66xGm.js";import"./Table-CKyDHAwz.js";import"./index-D0KjrmAk.js";import"./Dialog-Dt99Wk0o.js";import"./cross-DBYUdge9.js";import"./svgIconContainer-B9NI5uFH.js";import"./useBaseUiId-DKH5yAyq.js";import"./InternalBackdrop-BJFIyjvY.js";import"./composite-By0Jq-F3.js";import"./index-BZYkF7jv.js";import"./index-CK156m23.js";import"./index-I-Ka0MoY.js";import"./useEventCallback-BatYVPf8.js";import"./SkeletonBar-C8ESHQO6.js";import"./LoadingCell-B92WDQ7H.js";import"./ColumnConfigDialog-CJeyFZZ4.js";import"./DraggableList-Cvt6nEiH.js";import"./search-B5UpA2gd.js";import"./Input-DMsfofkB.js";import"./useControlled-BR0Jp6X7.js";import"./Button-B9aFxizM.js";import"./small-cross-CujZxCc8.js";import"./ActionButton-Bl9M4qvT.js";import"./Checkbox-B_AeFNqE.js";import"./useValueChanged-BcTLslwE.js";import"./CollapsiblePanel-6SzXO-cz.js";import"./MultiColumnSortDialog-Ck-AGHON.js";import"./MenuTrigger-D4Gx36JC.js";import"./CompositeItem-g-Qz-xCN.js";import"./ToolbarRootContext-ByyEnW8P.js";import"./getDisabledMountTransitionStyles-LOuwySdb.js";import"./getPseudoElementBounds-DDbKOR-k.js";import"./chevron-down-vn_j_zw5.js";import"./index-CJvQAT9P.js";import"./error-CJcI6CJg.js";import"./BaseCbacBanner-CuETapu_.js";import"./makeExternalStore-DsqUkO_T.js";import"./Tooltip-DaEaPpGd.js";import"./PopoverPopup-hdVmfLzZ.js";import"./debounce-DejzhDtV.js";import"./useOsdkClient-DzVNAXf5.js";import"./tick-CCKb6vG9.js";import"./DropdownField-Cm4jpBrK.js";import"./isEqual-BBDvdDDX.js";import"./withOsdkMetrics-Dgk1QvO0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
