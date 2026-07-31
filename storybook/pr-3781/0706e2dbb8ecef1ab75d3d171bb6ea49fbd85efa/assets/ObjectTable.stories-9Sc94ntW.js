import{j as i}from"./iframe-CvtO4IMB.js";import{O as p}from"./object-table-DAwtM7LZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCIDPo6t.js";import"./preload-helper-BrvcVhe2.js";import"./Table-DOLAqO0k.js";import"./index-B_GzWBIK.js";import"./Dialog-D7OYP-dq.js";import"./cross-Odyniiv9.js";import"./svgIconContainer-CCvUYbsi.js";import"./useBaseUiId-Cttj69LG.js";import"./InternalBackdrop-C_JPQuma.js";import"./composite-jre0rmDk.js";import"./index-D86dfeRh.js";import"./index-B3UPezCW.js";import"./index-D10lt-2t.js";import"./useEventCallback-ZS4dwuNv.js";import"./SkeletonBar-dh8QhwTh.js";import"./LoadingCell-B8EBAx7k.js";import"./ColumnConfigDialog-DwtmwtSG.js";import"./DraggableList-Ccdp9-TJ.js";import"./search-CcdNkTVL.js";import"./Input-CZiCqG3l.js";import"./useControlled-DaXRoC7J.js";import"./isEqual-CH4q6F0W.js";import"./isObject-Dyg8l838.js";import"./Button-BGi-KOsB.js";import"./ActionButton-DwqtISZg.js";import"./Checkbox-BpcS_XKv.js";import"./useValueChanged-BqQd7JUI.js";import"./CollapsiblePanel-DpUk_I_t.js";import"./MultiColumnSortDialog-G06mBLA6.js";import"./MenuTrigger-BkAleJx0.js";import"./CompositeItem-BQrOCuSB.js";import"./ToolbarRootContext-D-1cr-4z.js";import"./getDisabledMountTransitionStyles-DoSX0V-e.js";import"./getPseudoElementBounds-D2XOf9CN.js";import"./chevron-down-C-SHqWoa.js";import"./index-D9z6kKbW.js";import"./error-Bz0GJG-G.js";import"./BaseCbacBanner-Us_BuLqF.js";import"./makeExternalStore-XAqN2zqJ.js";import"./Tooltip-Cn1_Mxal.js";import"./PopoverPopup-7xfh03GJ.js";import"./toNumber-RJZJcS_O.js";import"./useOsdkClient-DBTXLhaX.js";import"./tick-C_u5au6g.js";import"./DropdownField-CZ-LUhIW.js";import"./withOsdkMetrics-DEHLnQpj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
