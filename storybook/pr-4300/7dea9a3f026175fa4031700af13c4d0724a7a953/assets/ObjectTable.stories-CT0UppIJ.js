import{j as i}from"./iframe-D3mBTfqd.js";import{O as p}from"./object-table-BmSiyhH0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cibdx7Vx.js";import"./preload-helper-RhNKQ2Pa.js";import"./Table-D5-h2zwh.js";import"./index-DCS7OdDx.js";import"./Dialog-DbVEFERY.js";import"./cross-Cs7mtZ7v.js";import"./svgIconContainer-CwmlAS-2.js";import"./useBaseUiId-hynuT-IP.js";import"./InternalBackdrop-DNSxnLlU.js";import"./composite-BE_H9BAX.js";import"./index-YNTwsynL.js";import"./index-Ch5DNylK.js";import"./index-yxRsWDJt.js";import"./useEventCallback-CEvZMKXh.js";import"./SkeletonBar-BORqTxsq.js";import"./LoadingCell-Bx56T2Bi.js";import"./ColumnConfigDialog-DzzE2iwn.js";import"./DraggableList-DF47COil.js";import"./search-CxMCC1Wj.js";import"./Input-eLGPTS9w.js";import"./useControlled-k1vl1-pB.js";import"./Button-B0c6HnvU.js";import"./small-cross-C_POnZQE.js";import"./ActionButton-y2sXfkTG.js";import"./Checkbox-QvPT4pF7.js";import"./useValueChanged-i2iant8L.js";import"./CollapsiblePanel-GMK9kxHe.js";import"./MultiColumnSortDialog-C_VRaZdF.js";import"./MenuTrigger-DOHOHG30.js";import"./CompositeItem-20RMszAx.js";import"./ToolbarRootContext-DKBBgUjn.js";import"./getDisabledMountTransitionStyles-CltXDkvP.js";import"./getPseudoElementBounds-uAR-4phM.js";import"./chevron-down-CTo4p9pl.js";import"./index-BL026QrW.js";import"./error-ifBqoXQc.js";import"./BaseCbacBanner-Be8DWF3Z.js";import"./makeExternalStore-D3BDuZOH.js";import"./Tooltip-D4jJN_ia.js";import"./PopoverPopup-BlPyX7uT.js";import"./debounce-8v_G0MM7.js";import"./useOsdkClient-BXgSuM8y.js";import"./tick-Bdbhcehw.js";import"./DropdownField-BFO3Yx-p.js";import"./isEqual-BvS6zo9P.js";import"./withOsdkMetrics-Crg_ITzK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
