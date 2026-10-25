import{j as i}from"./iframe-C9eTmg5F.js";import{O as p}from"./object-table-BFJt_XBe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D28KN-KB.js";import"./preload-helper-MBuTZogN.js";import"./Table-BD6TclSS.js";import"./index-Cl06-CY3.js";import"./Dialog-B4YghQDZ.js";import"./cross-BNf72m15.js";import"./svgIconContainer-B8-j9zbf.js";import"./useBaseUiId-CarAhcX4.js";import"./InternalBackdrop-CEAB_Tl8.js";import"./composite-BG0FW9Gv.js";import"./index-DawaRm_6.js";import"./index-UInLMRBx.js";import"./index-2Dxqnc05.js";import"./useEventCallback-CaSNRWxA.js";import"./SkeletonBar-jvvHiVWk.js";import"./LoadingCell-DCMe2S9E.js";import"./ColumnConfigDialog-Pa_A63wu.js";import"./DraggableList-DD40pty3.js";import"./search-BBX0widz.js";import"./Input-RYWRwt9M.js";import"./useControlled-D63t172P.js";import"./Button-CrIJmJlm.js";import"./small-cross-BTCn6zZs.js";import"./ActionButton-VZlfdBm7.js";import"./Checkbox-78UKRuuo.js";import"./useValueChanged-BVHy35zR.js";import"./CollapsiblePanel-B1UPkWfl.js";import"./MultiColumnSortDialog-DpJo-55X.js";import"./MenuTrigger-KK_Dd5KH.js";import"./CompositeItem-QTP5J2AO.js";import"./ToolbarRootContext-MN-0Ldxt.js";import"./getDisabledMountTransitionStyles-BTqLOmVB.js";import"./getPseudoElementBounds-CgTJwG5C.js";import"./chevron-down-BJBNlRqs.js";import"./index--xwF9EYW.js";import"./error-BYbnYzlx.js";import"./BaseCbacBanner-DokTRe_s.js";import"./makeExternalStore-CAiiZnZr.js";import"./Tooltip-qg3PMoFt.js";import"./PopoverPopup-D9bH8toe.js";import"./debounce-C6FqpP08.js";import"./useOsdkClient-CNiGT0YI.js";import"./tick-CF6J7PUl.js";import"./DropdownField-Cf4e64fv.js";import"./isEqual-BPwaLeUQ.js";import"./withOsdkMetrics-Dy0OWLdL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
