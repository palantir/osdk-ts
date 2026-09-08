import{j as i}from"./iframe-DSHto0DU.js";import{O as p}from"./object-table-BgkvCuPO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B5_hVL76.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CxqmXKu3.js";import"./index-DgEgOLFM.js";import"./Dialog-BOyyWGLK.js";import"./cross-FFwPOx1g.js";import"./svgIconContainer-D1SJmbot.js";import"./useBaseUiId-C-ni1EUd.js";import"./InternalBackdrop-BPZt_MJA.js";import"./composite-CGWcZn8w.js";import"./index-Dsj4AUeZ.js";import"./index-Da1D6qV_.js";import"./index-Cg05C7Um.js";import"./useEventCallback-DGorVKay.js";import"./SkeletonBar-_7teksHk.js";import"./LoadingCell-BD0XwVrT.js";import"./ColumnConfigDialog-BbW8nF82.js";import"./DraggableList-CZBWI52s.js";import"./search-BdBx2XvV.js";import"./Input-KYVV9ro4.js";import"./useControlled-vcfVgJyd.js";import"./Button-3LMPugrf.js";import"./small-cross-CDGKQKRZ.js";import"./ActionButton-D1Tmn4nA.js";import"./Checkbox-C0KMOFgH.js";import"./useValueChanged-P73U_JNR.js";import"./CollapsiblePanel-Br5gvUV_.js";import"./MultiColumnSortDialog-p6K-8FgF.js";import"./MenuTrigger-DWjUhq_w.js";import"./CompositeItem-vxVvcXOU.js";import"./ToolbarRootContext-CSFHIoxQ.js";import"./getDisabledMountTransitionStyles-CN3s_Czu.js";import"./getPseudoElementBounds-C1cvZaeh.js";import"./chevron-down-DEDDGssX.js";import"./index-D1lPazbO.js";import"./error-DjYRJjuj.js";import"./BaseCbacBanner-BU4VlrQ_.js";import"./makeExternalStore--ixwTB0S.js";import"./Tooltip-B6O1k0wv.js";import"./PopoverPopup-mckkiFEE.js";import"./debounce-CbpWBqbr.js";import"./useOsdkClient-SmfWaa1T.js";import"./tick-IfmUtKPy.js";import"./DropdownField-Cf3uBb5H.js";import"./isEqual-COTunjEM.js";import"./withOsdkMetrics-BVxbOnBr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
