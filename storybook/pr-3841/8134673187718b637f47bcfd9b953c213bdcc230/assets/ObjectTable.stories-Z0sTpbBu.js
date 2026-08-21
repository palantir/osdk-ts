import{j as i}from"./iframe-BOPH40aM.js";import{O as p}from"./object-table-CwbcJ0co.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BPva97H0.js";import"./preload-helper-Dk7sOnp6.js";import"./Table-DDg19h3D.js";import"./index-C6HCGinX.js";import"./Dialog-D5Vta0XL.js";import"./cross-Dyy1QuxQ.js";import"./svgIconContainer-C74jhUFY.js";import"./useBaseUiId-FmUF_HCn.js";import"./InternalBackdrop-DXhiZMhg.js";import"./composite-D2Y_yGja.js";import"./index-BdcQoi5s.js";import"./index-Dn6uDsye.js";import"./index-5cDTy_56.js";import"./useEventCallback-DFtwstmX.js";import"./SkeletonBar-BFZg22dk.js";import"./LoadingCell-DktVzcvW.js";import"./ColumnConfigDialog--5UMrtN6.js";import"./DraggableList-D--051Oi.js";import"./search-CzcjumOg.js";import"./Input-IJOIjizp.js";import"./useControlled-D0weT_xr.js";import"./Button-BEu920XA.js";import"./small-cross-G4HnNcP3.js";import"./ActionButton-Av230VXe.js";import"./Checkbox-Dp3MELm6.js";import"./useValueChanged--LsWGCe4.js";import"./CollapsiblePanel-CKq8a2Q7.js";import"./MultiColumnSortDialog-puJirV83.js";import"./MenuTrigger-DJNmOI8Y.js";import"./CompositeItem-BrrSAdxA.js";import"./ToolbarRootContext-BQh3Vmwb.js";import"./getDisabledMountTransitionStyles-ZNI7YJ6O.js";import"./getPseudoElementBounds-CX_DMQ51.js";import"./chevron-down-BwPY74Fq.js";import"./index-DIdLImiR.js";import"./error-CQh9rOC1.js";import"./BaseCbacBanner-BMq0Yx7G.js";import"./makeExternalStore-CDJtVkjz.js";import"./Tooltip-Bi19yJDJ.js";import"./PopoverPopup-D_yfhwEP.js";import"./debounce-DNlMjLPc.js";import"./useOsdkClient-B8kqEZV4.js";import"./tick-dQV5Bvko.js";import"./DropdownField-BTKnt1ZR.js";import"./isEqual-Bhet0e8P.js";import"./withOsdkMetrics-CxsZe37o.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
