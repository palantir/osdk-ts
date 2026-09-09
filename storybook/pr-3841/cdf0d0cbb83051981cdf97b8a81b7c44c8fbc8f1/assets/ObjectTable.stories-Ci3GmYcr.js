import{j as i}from"./iframe-B8cnvOYh.js";import{O as p}from"./object-table-D-LWbXTb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D4at_ghw.js";import"./preload-helper-LnHSiiGM.js";import"./Table-BYjDr92W.js";import"./index-B3ykqjKt.js";import"./Dialog-DVh-Zb-K.js";import"./cross-CRSXtga6.js";import"./svgIconContainer-DXuXKKtJ.js";import"./useBaseUiId-BfhiVoPE.js";import"./InternalBackdrop-DBB8A_Xe.js";import"./composite-CpLfOjCv.js";import"./index-Br3P2ZZs.js";import"./index-Btox6Sl3.js";import"./index-BriJK3jE.js";import"./useEventCallback-CWz421aU.js";import"./SkeletonBar-DpIUlSQd.js";import"./LoadingCell-BCv072HP.js";import"./ColumnConfigDialog-DnBpPcxy.js";import"./DraggableList-BoTdqZSG.js";import"./search-Dy-VZ8UW.js";import"./Input-DjBLxYPn.js";import"./useControlled-Bd_oVfJe.js";import"./Button-BXcD7GGd.js";import"./small-cross-CAHXVf7A.js";import"./ActionButton-B9jE2LPd.js";import"./Checkbox-DidiGCmH.js";import"./useValueChanged-W50UaXFT.js";import"./CollapsiblePanel-DYmS8znM.js";import"./MultiColumnSortDialog-CnZm94rC.js";import"./MenuTrigger-BDTwbkqs.js";import"./CompositeItem-BZ4KTjXl.js";import"./ToolbarRootContext-GOwsslzm.js";import"./getDisabledMountTransitionStyles-BS_53I9A.js";import"./getPseudoElementBounds-nJ_aPL17.js";import"./chevron-down-CKQT8552.js";import"./index-BDYln6VT.js";import"./error-Bttrd0IT.js";import"./BaseCbacBanner-HEWQu21Z.js";import"./makeExternalStore-D8SbLzm4.js";import"./Tooltip-C7t2fm4N.js";import"./PopoverPopup-ZEHuNINK.js";import"./debounce-C4M36uj5.js";import"./useOsdkClient-CNX5cvgx.js";import"./tick-C0_exER5.js";import"./DropdownField-kPr-3fnd.js";import"./isEqual-D-yBf61h.js";import"./withOsdkMetrics-Dc0ezLCb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
