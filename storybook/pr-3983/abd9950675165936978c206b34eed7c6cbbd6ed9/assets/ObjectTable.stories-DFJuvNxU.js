import{j as i}from"./iframe-DvFhas0q.js";import{O as p}from"./object-table-BrWh7pSz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ct6GLeOF.js";import"./preload-helper-QHjuDrJd.js";import"./Table-xJp2Wsgi.js";import"./index-CmLQwMDk.js";import"./Dialog-Bh2Cfnay.js";import"./cross-CM36P0tx.js";import"./svgIconContainer-BHO7oNHP.js";import"./useBaseUiId-BFo_-NKJ.js";import"./InternalBackdrop-BEZpm-Rm.js";import"./composite-C99jNiLY.js";import"./index-Apg0qjyu.js";import"./index-BoSI0BFD.js";import"./index-lBWfPJIN.js";import"./useEventCallback-CaLmf3WD.js";import"./SkeletonBar-DYRVMcyT.js";import"./LoadingCell-BL2dIJAr.js";import"./ColumnConfigDialog-BxhWPuH-.js";import"./DraggableList-B1ucVK1_.js";import"./search-C6DWKwgW.js";import"./Input-Co66Vae_.js";import"./useControlled-CxHMv-Gu.js";import"./Button-CK4f3ZCw.js";import"./small-cross-BLY3irjp.js";import"./ActionButton-DMraA7nF.js";import"./Checkbox-2_35H22f.js";import"./useValueChanged-D5EnR-8c.js";import"./CollapsiblePanel-Ky7kH8D6.js";import"./MultiColumnSortDialog-CRzHQD8N.js";import"./MenuTrigger-CIWjpa9Z.js";import"./CompositeItem-Dn55C0Ya.js";import"./ToolbarRootContext-Dzf-NS_o.js";import"./getDisabledMountTransitionStyles-BsD7puFJ.js";import"./getPseudoElementBounds-WfWTcseT.js";import"./chevron-down-EuTJEAw_.js";import"./index-YzetP2f8.js";import"./error-ASo9jiXR.js";import"./BaseCbacBanner-BDyjVkT0.js";import"./makeExternalStore-wKI12oPU.js";import"./Tooltip-C1NiSt4U.js";import"./PopoverPopup-BENmx3Et.js";import"./debounce-CV3_uBLw.js";import"./useOsdkClient-DDHO7ERi.js";import"./tick-C-HkFW0L.js";import"./DropdownField-BAPz2zMI.js";import"./isEqual-RMEuw8IO.js";import"./withOsdkMetrics-UKaUAaA5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
