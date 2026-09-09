import{j as i}from"./iframe-SOll1F4-.js";import{O as p}from"./object-table-8Lyto80n.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-SLqVzeDp.js";import"./preload-helper-CZMLvVAf.js";import"./Table-D_kd8VXt.js";import"./index-DrJjeRbc.js";import"./Dialog-Bmx1tS-O.js";import"./cross-BhBNLXbN.js";import"./svgIconContainer-BqIiSSFa.js";import"./useBaseUiId-sLJlVzyX.js";import"./InternalBackdrop-DuO7hhrB.js";import"./composite-DrjuPSYu.js";import"./index-Bz0lLybg.js";import"./index-B_l0ycL7.js";import"./index-BxU0-qmk.js";import"./useEventCallback-DkB0XSt3.js";import"./SkeletonBar-ImB0JjUc.js";import"./LoadingCell-PvqKWmYK.js";import"./ColumnConfigDialog-CxJThB76.js";import"./DraggableList-DnYRjrbD.js";import"./search-DAnTDJ17.js";import"./Input-CD41sKiv.js";import"./useControlled-A2CHlnom.js";import"./Button-Cnjwffgu.js";import"./small-cross-DFG8waLt.js";import"./ActionButton-BED8MEyS.js";import"./Checkbox-B8Uf2TMr.js";import"./useValueChanged-BK4PR_uW.js";import"./CollapsiblePanel-D5QCO8r0.js";import"./MultiColumnSortDialog-DhUgrXVT.js";import"./MenuTrigger-mz_ipzIa.js";import"./CompositeItem-CILt4SmA.js";import"./ToolbarRootContext-C6z7XZRH.js";import"./getDisabledMountTransitionStyles-CqkzNEYE.js";import"./getPseudoElementBounds-DmvT9tik.js";import"./chevron-down-B7EMYXAy.js";import"./index-C1rZZXtv.js";import"./error-C4kcTs-K.js";import"./BaseCbacBanner-t3TVdD0X.js";import"./makeExternalStore-C8WgzvlO.js";import"./Tooltip-D0hmlA59.js";import"./PopoverPopup-BJU9-Q2L.js";import"./debounce-CbpELLX-.js";import"./useOsdkClient-DN1cnskB.js";import"./tick-DfEEUKDP.js";import"./DropdownField-DCmZO5bG.js";import"./isEqual-Cy_MZ2uT.js";import"./withOsdkMetrics-DEguMpFR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
