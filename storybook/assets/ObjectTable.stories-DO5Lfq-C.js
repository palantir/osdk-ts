import{j as i}from"./iframe-C5F37WDS.js";import{O as p}from"./object-table-BEbUX7TV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-8cJHrfm3.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CfGkAxhR.js";import"./index-DPmfEXn1.js";import"./Dialog-BtED4amM.js";import"./cross-CPshxXyQ.js";import"./svgIconContainer-D5Hoa2ds.js";import"./useBaseUiId-BGreBnEl.js";import"./InternalBackdrop-B09mEpfb.js";import"./composite-CGgdtCoR.js";import"./index-_URA0IQM.js";import"./index-DUd2_GTy.js";import"./index-kMdysijy.js";import"./useEventCallback-CnBtcH3P.js";import"./SkeletonBar-COnO3nFT.js";import"./LoadingCell-DK_o9OZw.js";import"./ColumnConfigDialog-CQnK5DVU.js";import"./DraggableList-BAlDHBgE.js";import"./search-KDPiG0C3.js";import"./Input-CoBEe8YJ.js";import"./useControlled-BmU56l0K.js";import"./Button-eBDyeEgi.js";import"./small-cross-DpbbqTEW.js";import"./ActionButton-B_JHD4Kz.js";import"./Checkbox-BQWkwBpa.js";import"./useValueChanged-Dyau8co3.js";import"./CollapsiblePanel-CZBHX6_H.js";import"./MultiColumnSortDialog-WUpno4wH.js";import"./MenuTrigger-BMhQEcnk.js";import"./CompositeItem-CkXf7jgb.js";import"./ToolbarRootContext-DTMhtNND.js";import"./getDisabledMountTransitionStyles-DT_lvr6t.js";import"./getPseudoElementBounds-DbutmOr_.js";import"./chevron-down--665Ugn9.js";import"./index-EP0qYko_.js";import"./error-BZcVMBoG.js";import"./BaseCbacBanner-S5UlBrJi.js";import"./makeExternalStore-BJFp2_WD.js";import"./Tooltip-Qr9uHTcA.js";import"./PopoverPopup-B2-_t_Ne.js";import"./debounce-CpEt3hrx.js";import"./useOsdkClient-CmCMz8RV.js";import"./tick-B0_SpxmY.js";import"./DropdownField-BAopx9eZ.js";import"./isEqual-CGhyDF2H.js";import"./withOsdkMetrics-BPZHiAPa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
