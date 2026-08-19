import{j as i}from"./iframe-BfMbsuTO.js";import{O as p}from"./object-table-CXvirFHf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CDTburFM.js";import"./preload-helper-CvOWIyqc.js";import"./Table-BCtO7Tm4.js";import"./index-DK1QCnCo.js";import"./Dialog-qbU7sNxi.js";import"./cross-CKp_r7sS.js";import"./svgIconContainer-CLqHKPGt.js";import"./useBaseUiId-Cepz8rU_.js";import"./InternalBackdrop-DXRw1dZW.js";import"./composite-BfY9eDFq.js";import"./index-DTXKD30u.js";import"./index-xWp45YNg.js";import"./index-DXRgQkgl.js";import"./useEventCallback-D2WgD8Fc.js";import"./SkeletonBar-DFlFqo-D.js";import"./LoadingCell-BSezMWI2.js";import"./ColumnConfigDialog-BbRlGI2h.js";import"./DraggableList-CHP2UEGQ.js";import"./search-BJeF5SRa.js";import"./Input-Cj0x-U8m.js";import"./useControlled-B68j-m4m.js";import"./Button-pvHRSg6_.js";import"./small-cross-djyfeFmh.js";import"./ActionButton-CytU0bca.js";import"./Checkbox-Dzhl8s6O.js";import"./useValueChanged-DyIk8Xfw.js";import"./CollapsiblePanel-CPMXApTs.js";import"./MultiColumnSortDialog-DIu64B3r.js";import"./MenuTrigger-Bm3OeSUo.js";import"./CompositeItem-CQTgHCYc.js";import"./ToolbarRootContext-Dr3KNeMK.js";import"./getDisabledMountTransitionStyles-DggBnFeQ.js";import"./getPseudoElementBounds-WGFkMGwU.js";import"./chevron-down-DCzLtESR.js";import"./index-B-v6d6PY.js";import"./error-DD1JkUFX.js";import"./BaseCbacBanner-CiZFeI-A.js";import"./makeExternalStore-C1l5Ysjg.js";import"./Tooltip-DIC1LP32.js";import"./PopoverPopup-CV-IPSFd.js";import"./debounce-7sbKsZ6D.js";import"./useOsdkClient-DLOB0_Is.js";import"./tick-Bur9r6Ja.js";import"./DropdownField-DhX33T-q.js";import"./isEqual-BOxWcwph.js";import"./withOsdkMetrics-mlNsH_gV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
