import{j as i}from"./iframe-BwirHNbs.js";import{O as p}from"./object-table-4_pxRvzD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ClYN-zJm.js";import"./preload-helper-BcRMcE6w.js";import"./Table-D-tZqhLK.js";import"./index-BmAPsQSt.js";import"./Dialog-JO_QRXHP.js";import"./cross-BGeKWzpP.js";import"./svgIconContainer-2pSHGQCS.js";import"./useBaseUiId-DmDKW149.js";import"./InternalBackdrop-D3Ls8fzN.js";import"./composite-B5RDHpm7.js";import"./index-IvU-D_vM.js";import"./index-EqsE1RFo.js";import"./index-PGrTwV1L.js";import"./useEventCallback-BDGr3X5U.js";import"./SkeletonBar-DYSS3rlU.js";import"./LoadingCell-BXP93Ivh.js";import"./ColumnConfigDialog-BLCSCtFt.js";import"./DraggableList-97N8w9-K.js";import"./search-DVE4XQYl.js";import"./Input-wSOSKhCX.js";import"./useControlled-KmS5bOnr.js";import"./Button-CN4mp3wI.js";import"./small-cross-SjNWyWub.js";import"./ActionButton-BeARaHOn.js";import"./Checkbox-BcJUUkXF.js";import"./useValueChanged-zp2A_D5s.js";import"./CollapsiblePanel-QaN6VVgw.js";import"./MultiColumnSortDialog-BJShujIq.js";import"./MenuTrigger-BXAqOG19.js";import"./CompositeItem-DM1dTjJL.js";import"./ToolbarRootContext-DHUZ3-w7.js";import"./getDisabledMountTransitionStyles-C8faNntK.js";import"./getPseudoElementBounds-D1fPl6ec.js";import"./chevron-down-D3Weizce.js";import"./index-pKQiofWN.js";import"./error-CL70nlEB.js";import"./BaseCbacBanner-DKq7ebkn.js";import"./makeExternalStore-CdNCMpqS.js";import"./Tooltip-BBPuwAdO.js";import"./PopoverPopup-DefD54Az.js";import"./debounce-Dxsepluv.js";import"./useOsdkClient-BKRNMM3l.js";import"./tick-DYr2OYVY.js";import"./DropdownField-DkfCApz5.js";import"./isEqual-OzYXQWRG.js";import"./withOsdkMetrics-CP7X3COO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
