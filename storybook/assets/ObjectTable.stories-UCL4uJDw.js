import{j as i}from"./iframe-BTVc0NfO.js";import{O as p}from"./object-table-BF9yNLuw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B3Sfi7Cd.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D11hnLOE.js";import"./index-CHKL9w9V.js";import"./Dialog-FASjDoGC.js";import"./cross-B5VTNSsk.js";import"./svgIconContainer-CnMTzFv5.js";import"./useBaseUiId-CZsgbpdM.js";import"./InternalBackdrop-qIbZ781e.js";import"./composite-C9Vb183y.js";import"./index-C2BuQfAN.js";import"./index-NKm1JDXX.js";import"./index-BEIXqWzC.js";import"./useEventCallback-D7W_6xJc.js";import"./SkeletonBar-C9fEJaD9.js";import"./LoadingCell-C-heY8gK.js";import"./ColumnConfigDialog-q-MU_TSe.js";import"./DraggableList-LdmXXIk8.js";import"./search-F6eLyO1Y.js";import"./Input-C8rOi6ap.js";import"./useControlled-CtWOXhfs.js";import"./Button-wiKLARtU.js";import"./small-cross-i8OgMQru.js";import"./ActionButton-Cz4aqbXW.js";import"./Checkbox-CPvoM0pd.js";import"./useValueChanged-CizP1i5b.js";import"./CollapsiblePanel-Blb2Hulw.js";import"./MultiColumnSortDialog-BL1wuoVK.js";import"./MenuTrigger-CY4Ly_HG.js";import"./CompositeItem-Ccapx6OP.js";import"./ToolbarRootContext-BluceK63.js";import"./getDisabledMountTransitionStyles-CZF91-Uw.js";import"./getPseudoElementBounds-BSVSOuNM.js";import"./chevron-down-Dp9CmW78.js";import"./index-Crp7dURd.js";import"./error-wP2V0esL.js";import"./BaseCbacBanner-BSwx0e4K.js";import"./makeExternalStore-DQnWSZhz.js";import"./Tooltip-BcXwlhoB.js";import"./PopoverPopup-iSPlQ-dm.js";import"./debounce-BLlsJYXr.js";import"./useOsdkClient-DKSqD0Ve.js";import"./tick-CJV0pt-z.js";import"./DropdownField-MAluBn4S.js";import"./isEqual-D2uuTnMB.js";import"./withOsdkMetrics-WJQAY5-z.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
