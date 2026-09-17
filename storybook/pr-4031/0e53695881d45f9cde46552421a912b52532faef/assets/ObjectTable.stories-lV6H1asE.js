import{j as i}from"./iframe-CMm4N1y0.js";import{O as p}from"./object-table-_y8JQsVL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BihZ0QzW.js";import"./preload-helper-DPdS5gYT.js";import"./Table-B-jh3DiY.js";import"./index-mc6WZDuQ.js";import"./Dialog-7hbNYFd7.js";import"./cross-w0K8LNSt.js";import"./svgIconContainer-zPF7HvxF.js";import"./useBaseUiId-DSNrt-U2.js";import"./InternalBackdrop-C3wXessL.js";import"./composite-BoQ1iNnl.js";import"./index-DgJDHTvw.js";import"./index-ULPzqRga.js";import"./index-TDPUwOnJ.js";import"./useEventCallback-C1kO7wJe.js";import"./SkeletonBar-BX6mbipF.js";import"./LoadingCell-BLjl_Xzy.js";import"./ColumnConfigDialog-CNZf5IfJ.js";import"./DraggableList-DhyTCalD.js";import"./search-CiZI6CH-.js";import"./Input-WLnnNcib.js";import"./useControlled-BNALToTQ.js";import"./Button-RJLOnGs4.js";import"./small-cross-Bzj4KzKP.js";import"./ActionButton-C1HDW1tb.js";import"./Checkbox-y1Ue4XXM.js";import"./useValueChanged-BAb8DN1s.js";import"./CollapsiblePanel-CKo7WZyd.js";import"./MultiColumnSortDialog-BhbhduM7.js";import"./MenuTrigger-BgJpdaXh.js";import"./CompositeItem-BwL5uNEu.js";import"./ToolbarRootContext-Dy9xQ5C5.js";import"./getDisabledMountTransitionStyles-WnHy71z6.js";import"./getPseudoElementBounds-CbILzRJ8.js";import"./chevron-down-BWoDSlPa.js";import"./index-DdpoA6j8.js";import"./error-BNe6vl6a.js";import"./BaseCbacBanner-CR1fj-E0.js";import"./makeExternalStore-C-_FdC6k.js";import"./Tooltip-B56bZ38u.js";import"./PopoverPopup-COua6oiQ.js";import"./debounce-e_CiYFMe.js";import"./useOsdkClient-DhcRZ6oq.js";import"./tick-Blq7nSqP.js";import"./DropdownField-Dpg0H91Q.js";import"./isEqual-CGKBuTFm.js";import"./withOsdkMetrics-CWiHOjas.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
