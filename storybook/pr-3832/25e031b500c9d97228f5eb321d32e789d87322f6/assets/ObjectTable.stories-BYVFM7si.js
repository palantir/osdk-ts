import{j as i}from"./iframe-Bw-Agif6.js";import{O as p}from"./object-table-CTJAZJUm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-vDr5XPht.js";import"./preload-helper-wHYoTEvY.js";import"./Table-YHJ1nC5C.js";import"./index-DNmIinQa.js";import"./Dialog-D6n9iA1R.js";import"./cross-D63pv_qh.js";import"./svgIconContainer-D0FLeaRo.js";import"./useBaseUiId-BkzXSrg6.js";import"./InternalBackdrop-DlvukuPB.js";import"./composite-B_WicqqA.js";import"./index-ByJX6_Sx.js";import"./index-CAIuwcNw.js";import"./index-ByTvDRwc.js";import"./useEventCallback-C1jTj680.js";import"./SkeletonBar-D3kOzCQe.js";import"./LoadingCell-rqLUXNzU.js";import"./ColumnConfigDialog-D7ROuj86.js";import"./DraggableList-rHucen_L.js";import"./search-B0cSkiVa.js";import"./Input-BrcHuaTL.js";import"./useControlled-kEo0k7Py.js";import"./isEqual-D8Ika_FF.js";import"./isObject-C-20wa_z.js";import"./Button-DHc-O6ds.js";import"./ActionButton-D-ZUAS07.js";import"./Checkbox-tUW5bxQD.js";import"./useValueChanged-Dx-JN9io.js";import"./CollapsiblePanel-DFCeMXeo.js";import"./MultiColumnSortDialog-D5O3P0b1.js";import"./MenuTrigger-RUVJ72u2.js";import"./CompositeItem-5WZPpFtM.js";import"./ToolbarRootContext-Cf0AzzGI.js";import"./getDisabledMountTransitionStyles-mJwhDS-c.js";import"./getPseudoElementBounds-Dqwkk5Q-.js";import"./chevron-down-Dngh-QRN.js";import"./index-B5NpxPBP.js";import"./error-Rg-jn8n4.js";import"./BaseCbacBanner-D2cg6kX3.js";import"./makeExternalStore-Bbb3TB_2.js";import"./Tooltip-BDXQSKX4.js";import"./PopoverPopup-BxLXkzKe.js";import"./toNumber-bloY9kc_.js";import"./useOsdkClient-jaVoMXOI.js";import"./tick-BPugKlpA.js";import"./DropdownField-RW9yBtlE.js";import"./withOsdkMetrics-C6Xz7eXL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
