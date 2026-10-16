import{j as i}from"./iframe-SdQCyUgp.js";import{O as p}from"./object-table-CorJDmXH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C1G8N9L3.js";import"./preload-helper-CW3K-5XG.js";import"./Table-CEXXqsEZ.js";import"./index-D3TvMuk-.js";import"./Dialog-CAeBKUuI.js";import"./cross-5HR9Xmh-.js";import"./svgIconContainer-DRjj58Q8.js";import"./useBaseUiId-CBeYQDU3.js";import"./InternalBackdrop-C_eB-9md.js";import"./composite-DgbmPZb7.js";import"./index-Bcc2WdCU.js";import"./index-D0j0DV3h.js";import"./index-DBcsmgnd.js";import"./useEventCallback-CkK2hdI-.js";import"./SkeletonBar-BqRHQ8dJ.js";import"./LoadingCell-Bxkg1Qxk.js";import"./ColumnConfigDialog-BXThY0PP.js";import"./DraggableList-B73KoICc.js";import"./search-DC3bQpgx.js";import"./Input-Dx-qEMGm.js";import"./useControlled-B_XDx7ZC.js";import"./Button-DVBp1SrV.js";import"./small-cross-NBpQZ1gf.js";import"./ActionButton-CwICYRG_.js";import"./Checkbox-CDNxOiiw.js";import"./useValueChanged-DzBSmBuv.js";import"./CollapsiblePanel-DwwGp_PD.js";import"./MultiColumnSortDialog-q2h4FROa.js";import"./MenuTrigger-1AFgbPOt.js";import"./CompositeItem-DAnhs0Iq.js";import"./ToolbarRootContext-CFFUOJKL.js";import"./getDisabledMountTransitionStyles-DSCIpTNj.js";import"./getPseudoElementBounds-CWqSLITa.js";import"./chevron-down-Bqf_32Up.js";import"./index-CqaCF-Lj.js";import"./error-CUc6sGqF.js";import"./BaseCbacBanner-B3p4Si6P.js";import"./makeExternalStore-BjNlV_-Y.js";import"./Tooltip-DmimMIVR.js";import"./PopoverPopup-33EHLoGi.js";import"./debounce-Co2H-TBC.js";import"./useOsdkClient-DlUfDwbC.js";import"./tick-BZ_N3aoo.js";import"./DropdownField-D5iAZq6S.js";import"./isEqual-61N_qsVY.js";import"./withOsdkMetrics-WETF-eLM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
