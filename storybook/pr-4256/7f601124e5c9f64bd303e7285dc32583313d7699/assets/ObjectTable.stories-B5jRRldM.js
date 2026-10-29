import{j as i}from"./iframe-CrBTuD2p.js";import{O as p}from"./object-table-BDOsjl3H.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BR97S7xU.js";import"./preload-helper-BjNyA4Tc.js";import"./Table-DfU-WPNC.js";import"./index-CFzUVYi2.js";import"./Dialog-38LaSVwr.js";import"./cross-BBINy6sP.js";import"./svgIconContainer-DW2driag.js";import"./useBaseUiId-BBTk7qb4.js";import"./InternalBackdrop-LpC4w9ZO.js";import"./composite-BeVo3QMW.js";import"./index-BqULJUvL.js";import"./index-Bnr4tUfA.js";import"./index-9tkhxWIX.js";import"./useEventCallback-BD2d3Tx5.js";import"./SkeletonBar-TDIAZEL9.js";import"./LoadingCell-Dir1o8pZ.js";import"./ColumnConfigDialog-bxqWbjfW.js";import"./DraggableList-CqZXz4K3.js";import"./search-BDp0U2-N.js";import"./Input-7YuL0Mnz.js";import"./useControlled-D0EXlvvG.js";import"./Button-6cIUTGc1.js";import"./small-cross-5byDOqd6.js";import"./ActionButton-p2_uRokn.js";import"./Checkbox-X3n0Oiil.js";import"./useValueChanged-DxaEZlR0.js";import"./CollapsiblePanel-CWFpKLhQ.js";import"./MultiColumnSortDialog-C8s-Ldtr.js";import"./MenuTrigger-BkWLeJuv.js";import"./CompositeItem-BE6iDbTy.js";import"./ToolbarRootContext-BXCYOJCq.js";import"./getDisabledMountTransitionStyles-mgoiWsTQ.js";import"./getPseudoElementBounds-C9gmy0te.js";import"./chevron-down-BqX1E0HN.js";import"./index-CEtkH-ta.js";import"./error-D-C4TtvX.js";import"./BaseCbacBanner-BEXvhDBn.js";import"./makeExternalStore-Dq8QV5--.js";import"./Tooltip-BgSVMYpF.js";import"./PopoverPopup-Bg_xMHlt.js";import"./debounce-B2lGFotZ.js";import"./useOsdkClient-26AsuYNX.js";import"./tick-BM2LaoTy.js";import"./DropdownField-Qm8Rb_9y.js";import"./isEqual-Be5mRTEV.js";import"./withOsdkMetrics-BvGvy0SD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
