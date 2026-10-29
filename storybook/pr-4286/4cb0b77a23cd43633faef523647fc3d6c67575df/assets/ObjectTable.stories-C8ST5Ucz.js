import{j as i}from"./iframe-C_ahFnte.js";import{O as p}from"./object-table-BtMR_OnT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cw24zIW6.js";import"./preload-helper-BHb0Injz.js";import"./Table-DLXPhATj.js";import"./index-CMAfnGax.js";import"./Dialog-CbOtsyj-.js";import"./cross-BAtZIK6I.js";import"./svgIconContainer-5iqtE3GT.js";import"./useBaseUiId-DyEK8-wC.js";import"./InternalBackdrop-oaroN_vT.js";import"./composite-6kxzU8nP.js";import"./index-40HiEJ_t.js";import"./index-CQRjwZPk.js";import"./index-BwjPeIMJ.js";import"./useEventCallback-DtB3C9nL.js";import"./SkeletonBar-CBTex6KK.js";import"./LoadingCell-MG_jMP8H.js";import"./ColumnConfigDialog-D8xKAy6h.js";import"./DraggableList-D3KfR8iu.js";import"./search-WeJq5Jbj.js";import"./Input-BOmt55ak.js";import"./useControlled-D2HRL4Vd.js";import"./Button-BF0zOcPV.js";import"./small-cross-CFiAlSxT.js";import"./ActionButton-BoswvknW.js";import"./Checkbox-BkoC8qnP.js";import"./useValueChanged-C2ULmJoA.js";import"./CollapsiblePanel-whWth_0-.js";import"./MultiColumnSortDialog-B-LrIHxe.js";import"./MenuTrigger-DfEjjsNm.js";import"./CompositeItem-DebMdAlI.js";import"./ToolbarRootContext-QybI75uQ.js";import"./getDisabledMountTransitionStyles-C6IdF26M.js";import"./getPseudoElementBounds-C7DtJwGW.js";import"./chevron-down-Dzt44ETV.js";import"./index-CcstwSD9.js";import"./error-DNwhr4rb.js";import"./BaseCbacBanner-DMfapRkh.js";import"./makeExternalStore-lErXhsir.js";import"./Tooltip-BTsS5oFd.js";import"./PopoverPopup-Ccomk73C.js";import"./debounce-WVnpB66O.js";import"./useOsdkClient-k2RdEafw.js";import"./tick-R__fCdWc.js";import"./DropdownField-vAKtIAD0.js";import"./isEqual-7xNdLAzs.js";import"./withOsdkMetrics-CSpFQCY6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
