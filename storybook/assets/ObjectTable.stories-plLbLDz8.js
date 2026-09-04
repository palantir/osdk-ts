import{j as i}from"./iframe-DTnMR0KG.js";import{O as p}from"./object-table-Dojizanr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-GzTP_biv.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CH6pH4zG.js";import"./index-Zau0Jz6Y.js";import"./Dialog-dAT1gs52.js";import"./cross-DMx8fbm0.js";import"./svgIconContainer-Dax4Obiz.js";import"./useBaseUiId-BmGZESq6.js";import"./InternalBackdrop-BIV-x21n.js";import"./composite-CHsrvqtn.js";import"./index-B1hrThmL.js";import"./index-BhpGgSwE.js";import"./index-QRxEtHvN.js";import"./useEventCallback-BFwQjvEd.js";import"./SkeletonBar-DT-REwch.js";import"./LoadingCell-t-D5rcrQ.js";import"./ColumnConfigDialog-BhGP4yqh.js";import"./DraggableList-CDDcyTKh.js";import"./search-D15ONi4r.js";import"./Input-Cz7lC9dl.js";import"./useControlled-CA00kb2t.js";import"./Button-CiLEYhU4.js";import"./small-cross-Nd_mbPyF.js";import"./ActionButton-xXKBDS-d.js";import"./Checkbox-BUOe58vg.js";import"./useValueChanged-BpSLdBnW.js";import"./CollapsiblePanel-CnWjjEN1.js";import"./MultiColumnSortDialog-BisE-FBR.js";import"./MenuTrigger-BSvYjEqY.js";import"./CompositeItem-Bv-USTDP.js";import"./ToolbarRootContext-CVieYv4R.js";import"./getDisabledMountTransitionStyles-gB2pWUeL.js";import"./getPseudoElementBounds-x5cxEdZq.js";import"./chevron-down-CGKhWSQM.js";import"./index-Dp8wnHZj.js";import"./error-CKmqMHYj.js";import"./BaseCbacBanner-9-YD5ayU.js";import"./makeExternalStore-DeAXmBwe.js";import"./Tooltip-DMXCxB-I.js";import"./PopoverPopup-D5G1tfGx.js";import"./debounce-DTHXiRTi.js";import"./useOsdkClient-DfHmfWgr.js";import"./tick-B6L2Bte4.js";import"./DropdownField-DgLlFLvX.js";import"./isEqual-DJ52-f9P.js";import"./withOsdkMetrics-CSsnJEPw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
