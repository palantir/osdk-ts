import{j as i}from"./iframe-BD39Do8C.js";import{O as p}from"./object-table-XvysqiEU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CIIaOHt_.js";import"./preload-helper-JSiQ8WbR.js";import"./Table-Kxd4s0Rq.js";import"./index-BCxf04aV.js";import"./Dialog-DbttJI7D.js";import"./cross-CMhnMXoS.js";import"./svgIconContainer-BGfZ28Se.js";import"./useBaseUiId-CixWZYdi.js";import"./InternalBackdrop-JgUl4SpN.js";import"./composite-Dw7ZpZcU.js";import"./index-BxvffljR.js";import"./index-BlGl871Z.js";import"./index-BMGw1Ywl.js";import"./useEventCallback-CAno7Uq2.js";import"./SkeletonBar-ChYm8Pif.js";import"./LoadingCell-Bp33neIb.js";import"./ColumnConfigDialog-CmdVMkd2.js";import"./DraggableList-CFz8s0Iz.js";import"./search-DKvlAX7y.js";import"./Input-C2jmuYOz.js";import"./useControlled-eZ44qZZ0.js";import"./Button-u59jaYGp.js";import"./small-cross-v3WipyAt.js";import"./ActionButton-7xwBUzYP.js";import"./Checkbox-CggHv61E.js";import"./useValueChanged-DEs8VwNn.js";import"./CollapsiblePanel-Drtssh2l.js";import"./MultiColumnSortDialog-CZb4OMVv.js";import"./MenuTrigger-n2HgLx6m.js";import"./CompositeItem-ucwXIdj-.js";import"./ToolbarRootContext-CEznXclz.js";import"./getDisabledMountTransitionStyles-CF6npNkJ.js";import"./getPseudoElementBounds-muQrWTVi.js";import"./chevron-down-Xa2zxhAU.js";import"./index-C4HeAi2L.js";import"./error-Bjl2LrVO.js";import"./BaseCbacBanner-D7gYN66H.js";import"./makeExternalStore-3auNYjTa.js";import"./Tooltip-A3U5tZhT.js";import"./PopoverPopup-B0-uC8s0.js";import"./debounce-Bbpr-sop.js";import"./useOsdkClient-s9NhLy7T.js";import"./tick--a7d8SCu.js";import"./DropdownField-sKOGesOW.js";import"./isEqual-BAy2lMjl.js";import"./withOsdkMetrics-Dp5pMzPZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
