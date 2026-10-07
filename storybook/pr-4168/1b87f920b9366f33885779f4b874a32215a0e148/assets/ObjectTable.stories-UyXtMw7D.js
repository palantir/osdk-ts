import{j as i}from"./iframe-BfqPDKql.js";import{O as p}from"./object-table-DjxNL_6f.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BDxsSj58.js";import"./preload-helper-CjR-GsqS.js";import"./Table-DY99F2ck.js";import"./index-3BLY6arO.js";import"./Dialog-DefyZ3S9.js";import"./cross-C4uG_0m-.js";import"./svgIconContainer-Bvpn0iJ8.js";import"./useBaseUiId-C-9mkB40.js";import"./InternalBackdrop-DUtosfX7.js";import"./composite-C5EU-6hJ.js";import"./index-CCUvb36V.js";import"./index-CdNizhnG.js";import"./index-BH2TTPUz.js";import"./useEventCallback-G3g3fg30.js";import"./SkeletonBar-B4bFxsHY.js";import"./LoadingCell-CnzaETsA.js";import"./ColumnConfigDialog-RB_j43Yp.js";import"./DraggableList-B3A3MYkb.js";import"./search-DVeWM__c.js";import"./Input-BwQuq_Q1.js";import"./useControlled-1Az1d9DS.js";import"./Button-jRfE62iM.js";import"./small-cross-DljuEPYZ.js";import"./ActionButton-C_6ndFXd.js";import"./Checkbox-CB13yCdv.js";import"./useValueChanged-BQjqUDLK.js";import"./CollapsiblePanel-B2Uq3N6C.js";import"./MultiColumnSortDialog-CAMtj-Rk.js";import"./MenuTrigger-D31LluJF.js";import"./CompositeItem-DBfMuqlH.js";import"./ToolbarRootContext-DxevvPzB.js";import"./getDisabledMountTransitionStyles-CValGxLT.js";import"./getPseudoElementBounds-CVMAeFzS.js";import"./chevron-down-CONoZixg.js";import"./index-Cg3apMKp.js";import"./error-BqCEo41c.js";import"./BaseCbacBanner-CO2Q_1Sj.js";import"./makeExternalStore-D6RKhZ7b.js";import"./Tooltip-D9E02NM2.js";import"./PopoverPopup-DJ-rXVm_.js";import"./debounce-CI_OgJjm.js";import"./useOsdkClient-5BRGAn8B.js";import"./tick-C-umiLKj.js";import"./DropdownField--_A00rJM.js";import"./isEqual-Da2lfOp4.js";import"./withOsdkMetrics-B6N8SPwA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
