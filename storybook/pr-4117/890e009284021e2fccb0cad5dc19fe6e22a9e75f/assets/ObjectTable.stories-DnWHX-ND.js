import{j as i}from"./iframe-BNXnxiJa.js";import{O as p}from"./object-table-Cb1oSNVI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers--tbghuh_.js";import"./preload-helper-CT8T0PJp.js";import"./Table-CH4uKdSM.js";import"./index-Ch-h42fp.js";import"./Dialog-CKvDjFCt.js";import"./cross-DNfPdLmM.js";import"./svgIconContainer-T3xea5l3.js";import"./useBaseUiId-BjmHkgmf.js";import"./InternalBackdrop-PmKOV69k.js";import"./composite-Cinouu0K.js";import"./index-rjvuha_2.js";import"./index-CUNAUHwV.js";import"./index-KZulTNIE.js";import"./useEventCallback-BmB9ehFQ.js";import"./SkeletonBar-C4SZgVA_.js";import"./LoadingCell-BfBhkylv.js";import"./ColumnConfigDialog-C9bO7pUK.js";import"./DraggableList-DKJFkDus.js";import"./search-DQwSGm2k.js";import"./Input-BQdVPwVd.js";import"./useControlled-DBRd_jSA.js";import"./Button-CDesYXNY.js";import"./small-cross-r42AjjlG.js";import"./ActionButton-CuFNzu9O.js";import"./Checkbox-1jAc03ff.js";import"./useValueChanged-BMp_-0Ka.js";import"./CollapsiblePanel-BKAENuDp.js";import"./MultiColumnSortDialog-D3Ok2AK3.js";import"./MenuTrigger-_gElmUn1.js";import"./CompositeItem-Ch_wyKgR.js";import"./ToolbarRootContext-B1FX1tpV.js";import"./getDisabledMountTransitionStyles-TqKYti97.js";import"./getPseudoElementBounds-C28IzjDZ.js";import"./chevron-down-CLu6_2JJ.js";import"./index-Be-Y0iQr.js";import"./error-BMUe0AWc.js";import"./BaseCbacBanner-DWO6AJ4A.js";import"./makeExternalStore-C77jTvWN.js";import"./Tooltip-Depdrqez.js";import"./PopoverPopup-C9jn2tje.js";import"./debounce-Dw0w9syk.js";import"./useOsdkClient-CKYOKSIJ.js";import"./tick-DtOuh9ys.js";import"./DropdownField-7JT5lhAG.js";import"./isEqual-BSNPV3Xn.js";import"./withOsdkMetrics-CGp4DYy1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
