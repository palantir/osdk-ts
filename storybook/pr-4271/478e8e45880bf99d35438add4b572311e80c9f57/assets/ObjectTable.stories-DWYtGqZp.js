import{j as i}from"./iframe-CDXR5TiH.js";import{O as p}from"./object-table-Y-ZKWo4Y.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DMONxKKs.js";import"./preload-helper-Dl7TLzKT.js";import"./Table-DwGvkhwd.js";import"./index-BUlTo8si.js";import"./Dialog-CknkactG.js";import"./cross-BNFw8vL_.js";import"./svgIconContainer-DvE8o4ZI.js";import"./useBaseUiId-DQwBq2Ep.js";import"./InternalBackdrop-DlnunXky.js";import"./composite-DrLkfYl3.js";import"./index-DyQAqcSx.js";import"./index-DgZ9bURa.js";import"./index-x4aOtmip.js";import"./useEventCallback-B5U4l4Fa.js";import"./SkeletonBar-CRB2LJn0.js";import"./LoadingCell-B_wF0LOF.js";import"./ColumnConfigDialog-DDwygbq8.js";import"./DraggableList-DHDxCBbK.js";import"./search-B19UftdY.js";import"./Input-CpjIkFYJ.js";import"./useControlled-D1Q05_VM.js";import"./Button-BX5bEl7N.js";import"./small-cross-Dzb4rQCP.js";import"./ActionButton-CnTp065j.js";import"./Checkbox-CnY15wSu.js";import"./useValueChanged-B2pE4_D0.js";import"./CollapsiblePanel-BQrF_G1l.js";import"./MultiColumnSortDialog-CkySjwCK.js";import"./MenuTrigger-B9Ivl0ZW.js";import"./CompositeItem-BwsWbkWf.js";import"./ToolbarRootContext-DIR8ob_8.js";import"./getDisabledMountTransitionStyles-BD4bCjuO.js";import"./getPseudoElementBounds-d0kuGfS4.js";import"./chevron-down-D5h4llJH.js";import"./index-a1CxhX_F.js";import"./error-DB4Z3Bk1.js";import"./BaseCbacBanner-D4pC6ex0.js";import"./makeExternalStore-DS89lBNV.js";import"./Tooltip-qSG85F-j.js";import"./PopoverPopup-4v2nZ5OG.js";import"./debounce-jTnZ1WYt.js";import"./useOsdkClient-DHGjCNuj.js";import"./tick-DBGC9sWR.js";import"./DropdownField-DnLaVkF3.js";import"./isEqual-C-LTDJqP.js";import"./withOsdkMetrics-DTJ2dgc2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
