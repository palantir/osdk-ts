import{j as i}from"./iframe-C3MdTHLQ.js";import{O as p}from"./object-table-HC9G0-zB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BwbaXLYB.js";import"./preload-helper-3M0V84kL.js";import"./Table-CF61Igz5.js";import"./index-BgVlrX6R.js";import"./Dialog-ArQrHAg9.js";import"./cross-Bgd4sC_w.js";import"./svgIconContainer-CipT1sHW.js";import"./useBaseUiId-BY9bLyd_.js";import"./InternalBackdrop-DAk90e5g.js";import"./composite-BNzQ7X-x.js";import"./index-CbVfK8fT.js";import"./index-BHAP5gqn.js";import"./index-DQ3V0Ck8.js";import"./useEventCallback-B9GmybVM.js";import"./SkeletonBar-NdZnQaRq.js";import"./LoadingCell-2W3SA1-R.js";import"./ColumnConfigDialog-EDoh1yDU.js";import"./DraggableList-BXNUpJnm.js";import"./search-7cyOXxuf.js";import"./Input-Dv1jlKn1.js";import"./useControlled-BVKJ7vS7.js";import"./Button-cJHIlP8z.js";import"./small-cross-DPNpbIW3.js";import"./ActionButton-BSVEJ7Hr.js";import"./Checkbox-epqZ-xFx.js";import"./useValueChanged-DxMDIhq4.js";import"./CollapsiblePanel-CsBBS9Ht.js";import"./MultiColumnSortDialog-DN6j5kZS.js";import"./MenuTrigger-C76cZwo1.js";import"./CompositeItem-DM0NOOVO.js";import"./ToolbarRootContext-DIyGn2ca.js";import"./getDisabledMountTransitionStyles-DS8Fcflj.js";import"./getPseudoElementBounds-5xT67UCu.js";import"./chevron-down-kdwD8AzF.js";import"./index-CoAkWlDV.js";import"./error-Kr8BQL-e.js";import"./BaseCbacBanner-DMT9YJWJ.js";import"./makeExternalStore-CDdlC2MZ.js";import"./Tooltip-DUCX4E7k.js";import"./PopoverPopup-CKTWXUlx.js";import"./debounce-BXkGDWS-.js";import"./useOsdkClient-D17MJqfm.js";import"./tick-CMLsuHuf.js";import"./DropdownField-BHHdSfJN.js";import"./isEqual-BPwUsz3X.js";import"./withOsdkMetrics-C_vOiZra.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
