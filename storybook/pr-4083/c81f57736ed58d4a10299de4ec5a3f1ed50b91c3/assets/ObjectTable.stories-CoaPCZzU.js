import{j as i}from"./iframe-C9OBkxCO.js";import{O as p}from"./object-table-DyBh1eIW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C_3w9tI5.js";import"./preload-helper-DzUjaibC.js";import"./Table-GHPPppGw.js";import"./index-CFjFkJ-v.js";import"./Dialog-C6jklDg1.js";import"./cross-DLECAn5_.js";import"./svgIconContainer-BvHwqNKP.js";import"./useBaseUiId-DrS8qHSd.js";import"./InternalBackdrop-CTmndIKQ.js";import"./composite-BI-3SHGF.js";import"./index-Ddu0h4gv.js";import"./index-_alj9X0j.js";import"./index-Bz5VFwta.js";import"./useEventCallback-DMriD0tz.js";import"./SkeletonBar-B8LNf0OH.js";import"./LoadingCell-BNyFOuWS.js";import"./ColumnConfigDialog-CVP1LZzf.js";import"./DraggableList-mTF-cNUq.js";import"./search-Cdrrqif2.js";import"./Input-DCcVeBLD.js";import"./useControlled-B3h0MmL1.js";import"./Button-DNW3Z-M9.js";import"./small-cross-Bpi6NFfA.js";import"./ActionButton-CPbx2fv2.js";import"./Checkbox-B1X_Gn66.js";import"./useValueChanged-Cja-sQjh.js";import"./CollapsiblePanel-89P4kXtj.js";import"./MultiColumnSortDialog-DWLrTEOw.js";import"./MenuTrigger-CGFwpF3E.js";import"./CompositeItem-ByNf42qV.js";import"./ToolbarRootContext-BjF8crHV.js";import"./getDisabledMountTransitionStyles-BYJIZN46.js";import"./getPseudoElementBounds-ChGaSxDt.js";import"./chevron-down-CRsfqdiU.js";import"./index-N_Ci-Ahv.js";import"./error-uXY_ifTf.js";import"./BaseCbacBanner-D8iGPSUH.js";import"./makeExternalStore-C1NBDQik.js";import"./Tooltip-BCMNs8th.js";import"./PopoverPopup-DvMdOZuS.js";import"./debounce-QFWpzeYe.js";import"./useOsdkClient-BkQTDtpM.js";import"./tick-BLKcW3rj.js";import"./DropdownField-DMyThSPG.js";import"./isEqual-DXjNUwI4.js";import"./withOsdkMetrics-BMU2Z44Q.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
