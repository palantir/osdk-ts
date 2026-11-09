import{j as i}from"./iframe-CwoOGB90.js";import{O as p}from"./object-table-BW9qhxFt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-74SQjRI4.js";import"./preload-helper-zjr9DTNv.js";import"./Table-CFVqUtVr.js";import"./index-CZrnOEge.js";import"./Dialog-rGFuYy_L.js";import"./cross-84LZ_c3o.js";import"./svgIconContainer-vpSdtZHg.js";import"./useBaseUiId-CG_HMXOZ.js";import"./InternalBackdrop-2kZ8nvu1.js";import"./composite-CQ1lSzH1.js";import"./index-BP83VGlc.js";import"./index-CtieK9tm.js";import"./index-CIs6h9pu.js";import"./useEventCallback-ByWQ63Gl.js";import"./SkeletonBar-B3HWXV5p.js";import"./LoadingCell-8n9ERDDX.js";import"./ColumnConfigDialog-CnguxUiQ.js";import"./DraggableList-Bso7ySjF.js";import"./search-B4Rhn5WX.js";import"./Input-Bfvllh0J.js";import"./useControlled-CyV_xO7n.js";import"./Button-CzS_tZvQ.js";import"./small-cross-CdfSHMjX.js";import"./ActionButton-BdjYmFRu.js";import"./Checkbox-CBh8ZgCe.js";import"./useValueChanged-d4U5lg5Y.js";import"./CollapsiblePanel-CzzEpLdL.js";import"./MultiColumnSortDialog-7OU1GsVB.js";import"./MenuTrigger-Ct25vTMs.js";import"./CompositeItem-uLTqCAuJ.js";import"./ToolbarRootContext-BHlqCq8I.js";import"./getDisabledMountTransitionStyles-CDwQ_97u.js";import"./getPseudoElementBounds-CxBwOVu1.js";import"./chevron-down-CzfXAkFG.js";import"./index-DRO4fLjt.js";import"./error-D1I108xZ.js";import"./BaseCbacBanner-sNaPb3A4.js";import"./makeExternalStore-BAl3wc3x.js";import"./Tooltip-DoSGgxMu.js";import"./isObject-DBuDBkaL.js";import"./debounce-DjU0zQzn.js";import"./useOsdkClient-CX_eol9_.js";import"./tick-B9GD-hKF.js";import"./DropdownField-DvlmGHHn.js";import"./isEqual-l3DFcAg6.js";import"./_baseIsEqual-By1SU2HG.js";import"./withOsdkMetrics-IkpPb6vj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
