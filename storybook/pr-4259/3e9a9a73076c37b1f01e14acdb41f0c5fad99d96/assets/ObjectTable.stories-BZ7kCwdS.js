import{j as i}from"./iframe-DOyQxJvH.js";import{O as p}from"./object-table-rCHTTNrC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BUY94hNh.js";import"./preload-helper-b99Wj4jj.js";import"./Table-BDyrIjWH.js";import"./index-DohetWl-.js";import"./Dialog-t2KrNQJf.js";import"./cross-Clcl0FW-.js";import"./svgIconContainer-B_aagRLN.js";import"./useBaseUiId-DieRYZnL.js";import"./InternalBackdrop-ByEBsKrq.js";import"./composite-ZJn0pY0h.js";import"./index-BPvIlRyU.js";import"./index-Bj0URVYm.js";import"./index-BkqZ1wLV.js";import"./useEventCallback-jKGT4Pcx.js";import"./SkeletonBar-ySgrjMCk.js";import"./LoadingCell-BedFgeOa.js";import"./ColumnConfigDialog-5y16klfk.js";import"./DraggableList-DcvsfxCi.js";import"./search-CFvqb_6m.js";import"./Input-1EVSbUy3.js";import"./useControlled-D5_WZpq_.js";import"./Button-Siw5hwdL.js";import"./small-cross-DHIK5OPW.js";import"./ActionButton-Cj8YJ3F7.js";import"./Checkbox-CsbfOGVY.js";import"./useValueChanged-BcjC7Q7U.js";import"./CollapsiblePanel-Amuq13yP.js";import"./MultiColumnSortDialog-C1c_eJ9g.js";import"./MenuTrigger-CfbmdoAo.js";import"./CompositeItem-CClLQtRU.js";import"./ToolbarRootContext-CL9w8adf.js";import"./getDisabledMountTransitionStyles-C53WijiN.js";import"./getPseudoElementBounds-veJLu94H.js";import"./chevron-down-CHciOX2j.js";import"./index-jxIBoeRQ.js";import"./error-CImoxm8w.js";import"./BaseCbacBanner-NdHkp8P6.js";import"./makeExternalStore-C8fED8Be.js";import"./Tooltip-CycvzHTs.js";import"./PopoverPopup-aigE3Okr.js";import"./debounce-Blq-yKsA.js";import"./useOsdkClient-9mLaoDY9.js";import"./tick-Z9gea7hj.js";import"./DropdownField-BqmCeBVH.js";import"./isEqual-Bi80oFRx.js";import"./withOsdkMetrics-CkKOCKYX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
