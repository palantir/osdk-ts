import{j as i}from"./iframe-BMT91W1Z.js";import{O as p}from"./object-table-CHLHgtoY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CVmbhRL9.js";import"./preload-helper-rvXeaCGs.js";import"./Table-DrLOC9YX.js";import"./index-Bx6Ivmjs.js";import"./Dialog-Ufu8hoIp.js";import"./cross-C9h9qNTe.js";import"./svgIconContainer-B3o1vMYf.js";import"./useBaseUiId-B4USe1gj.js";import"./InternalBackdrop-C3S75Ewn.js";import"./composite-D3rTrYkW.js";import"./index-xfqQSbot.js";import"./index-DEWgT4HO.js";import"./index-Biu6iMsk.js";import"./useEventCallback-BCuXMQng.js";import"./SkeletonBar-Cwkgfi-Z.js";import"./LoadingCell-JWak5BZo.js";import"./ColumnConfigDialog-4HXhX7RA.js";import"./DraggableList-Cg20omLf.js";import"./search-CYSVIzHU.js";import"./Input-B-23mNdu.js";import"./useControlled-L0eiJeCg.js";import"./Button-Djft0tAo.js";import"./small-cross-CyV6m0vF.js";import"./ActionButton-CUmEJmAC.js";import"./Checkbox-D_hza65E.js";import"./useValueChanged-Byf4MJrh.js";import"./CollapsiblePanel-C79Pa1Xk.js";import"./MultiColumnSortDialog-BVPqBnxe.js";import"./MenuTrigger-E2fABQOx.js";import"./CompositeItem-CssM4Gze.js";import"./ToolbarRootContext-D1Qf3sGL.js";import"./getDisabledMountTransitionStyles-w-M_QDiA.js";import"./getPseudoElementBounds-CvnYPr_B.js";import"./chevron-down-C4MVGpCZ.js";import"./index-BVpohJtF.js";import"./error-Dzj1sGPq.js";import"./BaseCbacBanner-Dv7E15sA.js";import"./makeExternalStore-DBhSiWtQ.js";import"./Tooltip-CACfcbwY.js";import"./PopoverPopup-aEwmg3S0.js";import"./debounce-D9qK1m7a.js";import"./useOsdkClient-CBtweC4d.js";import"./tick-DAiyHf9d.js";import"./DropdownField-BYApLNcp.js";import"./isEqual-CxBadIyU.js";import"./withOsdkMetrics-DgSik2_o.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
