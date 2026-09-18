import{j as i}from"./iframe-CHAjmeRW.js";import{O as p}from"./object-table-Cf6gXv4p.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-mc2-5-4t.js";import"./preload-helper-Bnd8YX8b.js";import"./Table-DEcUcosK.js";import"./index-uehY9gxK.js";import"./Dialog-CheU-fP7.js";import"./cross-21maCkVo.js";import"./svgIconContainer-C6bTix-V.js";import"./useBaseUiId-CrKq0iow.js";import"./InternalBackdrop-DDjeD9sW.js";import"./composite-DrWVaKH_.js";import"./index-0JEFRERF.js";import"./index-DItNlf6T.js";import"./index-DZ1xMNy0.js";import"./useEventCallback-BmA5_VIX.js";import"./SkeletonBar-BvPOXO85.js";import"./LoadingCell-BqyTx1me.js";import"./ColumnConfigDialog-D3wICKLg.js";import"./DraggableList-Dg9hBCfJ.js";import"./search-C-PuNkbt.js";import"./Input-CEDKmeIa.js";import"./useControlled-DIGLnSxk.js";import"./Button-BrV62231.js";import"./small-cross-COGTOage.js";import"./ActionButton-DV8Kf2gb.js";import"./Checkbox-CBbtoVJB.js";import"./useValueChanged-BEK9ykM9.js";import"./CollapsiblePanel-CQ1IUkVg.js";import"./MultiColumnSortDialog-DzjtgTnk.js";import"./MenuTrigger-BJIK7pGi.js";import"./CompositeItem-C3TCOkoR.js";import"./ToolbarRootContext-DT7PezqV.js";import"./getDisabledMountTransitionStyles-DPAhfDy1.js";import"./getPseudoElementBounds-Dc0AZ8zh.js";import"./chevron-down-BhaNHOdV.js";import"./index-BX5VsLRX.js";import"./error-D546O215.js";import"./BaseCbacBanner-DN1PfXxB.js";import"./makeExternalStore-DZYGiDNi.js";import"./Tooltip-gPwLingQ.js";import"./PopoverPopup-Bik_j545.js";import"./debounce-C6gik47c.js";import"./useOsdkClient-BcmsLoqQ.js";import"./tick-DLKt3574.js";import"./DropdownField-BPlhMtVD.js";import"./isEqual-tS70SJFu.js";import"./withOsdkMetrics-BAwWDEWh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
