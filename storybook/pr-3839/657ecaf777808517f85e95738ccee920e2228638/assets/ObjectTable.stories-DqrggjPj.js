import{j as i}from"./iframe-DbOzOGDn.js";import{O as p}from"./object-table-CnHgsnlH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CHKGYvpX.js";import"./preload-helper-CEOnTWAP.js";import"./Table-K52p4n9o.js";import"./index-Dg0aL1Ya.js";import"./Dialog-D-I0jKPM.js";import"./cross-p3kX_C4C.js";import"./svgIconContainer-BkMavql5.js";import"./useBaseUiId-BHeQMfEi.js";import"./InternalBackdrop-oULkb1ND.js";import"./composite-BwS7DM51.js";import"./index-DXhnYg4n.js";import"./index-CR6MxkSt.js";import"./index-CTUo3yCV.js";import"./useEventCallback-DlBcu5ho.js";import"./SkeletonBar-N1bXFhek.js";import"./LoadingCell-DrlWD_f-.js";import"./ColumnConfigDialog-NQ0ghzKG.js";import"./DraggableList-BdGFR88X.js";import"./search-B4i-bCdH.js";import"./Input-DhGctLIw.js";import"./useControlled-1SoxEbMs.js";import"./isEqual-CmtwWJaV.js";import"./isObject-YLlwJBkh.js";import"./Button-F6Bjz8AF.js";import"./ActionButton-H1WvZcF1.js";import"./Checkbox-DmJ7kxVi.js";import"./useValueChanged-fPXgHsVW.js";import"./CollapsiblePanel-J3B3q2NF.js";import"./MultiColumnSortDialog-DZdikWlT.js";import"./MenuTrigger-BqOdHhDk.js";import"./CompositeItem-BHfyFTGc.js";import"./ToolbarRootContext-BcsxKm3i.js";import"./getDisabledMountTransitionStyles-DpC69aQF.js";import"./getPseudoElementBounds-DcwtftU4.js";import"./chevron-down-DWiP-M1R.js";import"./index-CNFuF0v3.js";import"./error-AkXLsrSc.js";import"./BaseCbacBanner-Cy7-gQ95.js";import"./makeExternalStore-BRXhYe85.js";import"./Tooltip-DEmas6fX.js";import"./PopoverPopup-CZMDX-Af.js";import"./toNumber-DorZ4yjy.js";import"./useOsdkClient-DnKXdJAr.js";import"./tick-e1TkvrqX.js";import"./DropdownField-CR1fQbVR.js";import"./withOsdkMetrics-C0unEn4u.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
