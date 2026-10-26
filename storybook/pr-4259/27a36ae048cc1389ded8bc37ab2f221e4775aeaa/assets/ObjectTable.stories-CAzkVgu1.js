import{j as i}from"./iframe-7zkNpsTb.js";import{O as p}from"./object-table-C0NNCCeN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CKHD3DQO.js";import"./preload-helper-BcwadNu2.js";import"./Table-CdEtTQGj.js";import"./index-D2Ps7yda.js";import"./Dialog-BA7Fb4VQ.js";import"./cross-CuqDFG72.js";import"./svgIconContainer-WZg9oowH.js";import"./useBaseUiId-KSlThZEb.js";import"./InternalBackdrop-BHCJp7SO.js";import"./composite-BrxcTD8Y.js";import"./index-CVa5QU3-.js";import"./index-DD_YShHf.js";import"./index-B8Wuwd1p.js";import"./useEventCallback-CNj_iPP2.js";import"./SkeletonBar-DOAgUDTQ.js";import"./LoadingCell-D38BbQrv.js";import"./ColumnConfigDialog-BbhmYQ2I.js";import"./DraggableList-CdsZ4puP.js";import"./search-LTMAICSm.js";import"./Input-Qt7qv0fd.js";import"./useControlled-CgLNclS7.js";import"./Button-CF1rIE6I.js";import"./small-cross-Cqucs5l-.js";import"./ActionButton-DOn_4WcG.js";import"./Checkbox-gZaZw0kJ.js";import"./useValueChanged-CcWIuI5C.js";import"./CollapsiblePanel-BJ-_vjCN.js";import"./MultiColumnSortDialog-Dd-zb_XL.js";import"./MenuTrigger-B5MKEVCA.js";import"./CompositeItem-B9MRs6kj.js";import"./ToolbarRootContext-DK5I1UJe.js";import"./getDisabledMountTransitionStyles-DWBf3DRe.js";import"./getPseudoElementBounds-CRqDORYM.js";import"./chevron-down-R1agRcMd.js";import"./index-Bav8Bbwa.js";import"./error-CKvp5L_L.js";import"./BaseCbacBanner-BQtHX_ci.js";import"./makeExternalStore-DZpAF_p8.js";import"./Tooltip-ClphVmvg.js";import"./PopoverPopup-D-_EHFJQ.js";import"./debounce-CddDKvV0.js";import"./useOsdkClient-Vip7aKrf.js";import"./tick-BYcH1X9T.js";import"./DropdownField-C8ry4gZT.js";import"./isEqual-DIMXO8ep.js";import"./withOsdkMetrics-BuwNXHNi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
