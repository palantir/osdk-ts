import{j as i}from"./iframe-DDCC62mw.js";import{O as p}from"./object-table-OQexuOAk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CUbF4JHU.js";import"./preload-helper-TbI6pun2.js";import"./Table-Ec8kAuP5.js";import"./index-z6zT66iy.js";import"./Dialog-DmoyXpWO.js";import"./cross-CFNkWks7.js";import"./svgIconContainer-8NI9Pceg.js";import"./useBaseUiId-Cx54uMSy.js";import"./InternalBackdrop-DEeOk2qp.js";import"./composite-oUxuVDiC.js";import"./index-BtGfhpV-.js";import"./index-8Tq8e6Kq.js";import"./index-C68Nk8KR.js";import"./useEventCallback-B5u_qSmP.js";import"./SkeletonBar-RZyiWmdj.js";import"./LoadingCell-C27X0YWe.js";import"./ColumnConfigDialog-BFe0lJSs.js";import"./DraggableList-BpIVC8Oz.js";import"./search-BJP-HOO5.js";import"./Input-L9q-qGHh.js";import"./useControlled-CHZ6ZiHg.js";import"./Button-DreRcsv2.js";import"./small-cross-ZcATWl5F.js";import"./ActionButton-CCAWhnCb.js";import"./Checkbox-D1ridbKQ.js";import"./useValueChanged-R_tn0UMM.js";import"./CollapsiblePanel-D0jWvycX.js";import"./MultiColumnSortDialog-IUhDXqPY.js";import"./MenuTrigger-Bh4gyTRB.js";import"./CompositeItem-EdV_vQTm.js";import"./ToolbarRootContext-B4LwY6SC.js";import"./getDisabledMountTransitionStyles-BWc9hNjX.js";import"./getPseudoElementBounds-BxYMv3LN.js";import"./chevron-down-CKdPMFgU.js";import"./index-DNvyrcf-.js";import"./error-B0SCddV6.js";import"./BaseCbacBanner-lZ-L0DlF.js";import"./makeExternalStore-Bpmw5WPB.js";import"./Tooltip-C5trv4L9.js";import"./PopoverPopup-BChNR2Ib.js";import"./debounce-Dh0-cHXm.js";import"./useOsdkClient-B0m0YA5K.js";import"./tick-CQHTofux.js";import"./DropdownField-Be49_OLB.js";import"./isEqual-D9ZQ6BUD.js";import"./withOsdkMetrics-3tZAXSEA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
