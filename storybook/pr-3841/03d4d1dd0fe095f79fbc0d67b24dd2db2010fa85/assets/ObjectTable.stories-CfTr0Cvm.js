import{j as i}from"./iframe-Bln2S2Hd.js";import{O as p}from"./object-table-0P7byv91.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-jqwEdPCb.js";import"./preload-helper-D4XaSru4.js";import"./Table-BEkghpit.js";import"./index-D1Ietrlj.js";import"./Dialog-DEyvnXkc.js";import"./cross-wcRc-diA.js";import"./svgIconContainer-BTYpKb3Z.js";import"./useBaseUiId-DzFDj8Yr.js";import"./InternalBackdrop-KP_aOvQ9.js";import"./composite-BlSW-C1U.js";import"./index-BOpwrJ-W.js";import"./index-CnTqZcox.js";import"./index-C16meakn.js";import"./useEventCallback-Bj0pRbTX.js";import"./SkeletonBar-BdZdM1Th.js";import"./LoadingCell-B35XRP0_.js";import"./ColumnConfigDialog-CvyyVNgA.js";import"./DraggableList-DfRqf7-w.js";import"./search-DNt_4LqU.js";import"./Input-CVgkuK1P.js";import"./useControlled-BG_GY85e.js";import"./Button-B9XMX6ms.js";import"./small-cross-E68qj1jZ.js";import"./ActionButton-DDJblqxX.js";import"./Checkbox-BW1T9Qnp.js";import"./useValueChanged-D84JKHV4.js";import"./CollapsiblePanel-_dpQ2gCa.js";import"./MultiColumnSortDialog-DxPIIqla.js";import"./MenuTrigger-BFaGK2P0.js";import"./CompositeItem-D6F0jU5J.js";import"./ToolbarRootContext-z7yzW3tg.js";import"./getDisabledMountTransitionStyles-B2diP31Y.js";import"./getPseudoElementBounds-BoRsn9l4.js";import"./chevron-down-B_NZATAC.js";import"./index-BHIpZYxv.js";import"./error-wBBSXgAg.js";import"./BaseCbacBanner-Br3vpTnB.js";import"./makeExternalStore-CXv5fKfm.js";import"./Tooltip-DgYrqeUf.js";import"./PopoverPopup-C1scz7F7.js";import"./debounce-Chz3lEmw.js";import"./useOsdkClient-8Oo-BI0v.js";import"./tick-CX7gnba2.js";import"./DropdownField-B6DQXdcq.js";import"./isEqual-D-po6U1T.js";import"./withOsdkMetrics-BkrRXFvl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
