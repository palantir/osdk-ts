import{j as i}from"./iframe-Ck_GGLOI.js";import{O as p}from"./object-table-C7tDmf_D.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DUom2G2g.js";import"./preload-helper-Ct_SzjwP.js";import"./Table-Dq8cXEs5.js";import"./index-B89KqVgP.js";import"./Dialog-BETH_eCU.js";import"./cross-KWWBZC90.js";import"./svgIconContainer-r8zB-P6B.js";import"./useBaseUiId--oVgeq5T.js";import"./InternalBackdrop-CLsC1B9Y.js";import"./composite-C_8Q5Icy.js";import"./index-B_ig_9F1.js";import"./index-B25gAHKW.js";import"./index-Dx72QQXF.js";import"./useEventCallback-CdgHi6xx.js";import"./SkeletonBar-D8aEk5EA.js";import"./LoadingCell-DOH4Gt6_.js";import"./ColumnConfigDialog-Ca2xj7EI.js";import"./DraggableList-C1A26BSI.js";import"./search-BoCb61rS.js";import"./Input-Dc0pCVB2.js";import"./useControlled-DlHXi5tj.js";import"./isEqual-BpEk8K4b.js";import"./isObject-5B2Vzc2B.js";import"./Button-CbHH9XWB.js";import"./ActionButton-DYUehOvv.js";import"./Checkbox-DYQgTm4E.js";import"./useValueChanged-BtmCdoCW.js";import"./CollapsiblePanel-nuTsezv3.js";import"./MultiColumnSortDialog-D905AHLH.js";import"./MenuTrigger-DDFq-ctt.js";import"./CompositeItem-Cj_m-_Op.js";import"./ToolbarRootContext-D_d6MWRT.js";import"./getDisabledMountTransitionStyles-BXYuVhzR.js";import"./getPseudoElementBounds-CYW6Hr-n.js";import"./chevron-down-PHjoZosY.js";import"./index-C7igWU5b.js";import"./error-B_r0fBp9.js";import"./BaseCbacBanner-IXJ8JBnE.js";import"./makeExternalStore-95duhyix.js";import"./Tooltip-CXWZf8sP.js";import"./PopoverPopup-DT2q6fhx.js";import"./toNumber-BAJpYGnz.js";import"./useOsdkClient-BGBF5mdg.js";import"./tick-BLlHsMVG.js";import"./DropdownField-BxJHqCX2.js";import"./withOsdkMetrics-B4h9Dq5k.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
