import{j as i}from"./iframe-BTbJEw_E.js";import{O as p}from"./object-table-dQhHxSap.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-tCCcUrMD.js";import"./preload-helper-aCGplSKY.js";import"./Table-D8IIQ0uD.js";import"./index-DWkrnykr.js";import"./Dialog-CCqAz4sd.js";import"./cross-AwvJd_Ud.js";import"./svgIconContainer-DggOleom.js";import"./useBaseUiId-lBVa_0WJ.js";import"./InternalBackdrop-Ckm1dtBk.js";import"./composite-B7RMGscZ.js";import"./index-DdrvFQuO.js";import"./index-18NAXc1Y.js";import"./index-AGrLxoIE.js";import"./useEventCallback-C5SBM2zO.js";import"./SkeletonBar-CvQ0kAkc.js";import"./LoadingCell-BeHh6Q1T.js";import"./ColumnConfigDialog-t8KafiPd.js";import"./DraggableList-CtRf-2Cd.js";import"./search-DBgBL-mB.js";import"./Input-C3RqpoyV.js";import"./useControlled-B9izrDgZ.js";import"./Button-vTo8rp-4.js";import"./small-cross-DGcKzG3K.js";import"./ActionButton-BWBnELV1.js";import"./Checkbox-BGoGAkIi.js";import"./useValueChanged-BSAVVzsI.js";import"./CollapsiblePanel-Cweq_HxM.js";import"./MultiColumnSortDialog-CsM2lET6.js";import"./MenuTrigger-D-L8fP0j.js";import"./CompositeItem-BnF_A8n_.js";import"./ToolbarRootContext-BJqUIRif.js";import"./getDisabledMountTransitionStyles-xzPhtnb4.js";import"./getPseudoElementBounds-BFGsCRAr.js";import"./chevron-down-CXkrXU2j.js";import"./index-YcO7uA7L.js";import"./error-wWqS_WOM.js";import"./BaseCbacBanner-DiwiC2U6.js";import"./makeExternalStore-Cj_xL18b.js";import"./Tooltip-CZNUyLi_.js";import"./isObject-1bmMeuQz.js";import"./debounce-B6qaA1VO.js";import"./useOsdkClient-CpDEON-O.js";import"./tick-iJfDowrv.js";import"./DropdownField-BGUtXP7T.js";import"./isEqual-Dg8F-44E.js";import"./_baseIsEqual-C5YFc0w8.js";import"./withOsdkMetrics-eBRijj-i.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
