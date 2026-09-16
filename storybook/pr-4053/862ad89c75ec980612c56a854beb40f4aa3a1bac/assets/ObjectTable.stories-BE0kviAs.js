import{j as i}from"./iframe-CrxwL2-E.js";import{O as p}from"./object-table-CdCKGQ1U.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dg5a6x5J.js";import"./preload-helper-D8KRM-Lu.js";import"./Table-B42d_fP5.js";import"./index-CnRzHgPn.js";import"./Dialog-D9K-Kurk.js";import"./cross-tJCZU9dn.js";import"./svgIconContainer-BZaQ0M_F.js";import"./useBaseUiId-CHWsF01c.js";import"./InternalBackdrop-DA84w9Xz.js";import"./composite-D_Dq2ROx.js";import"./index-Bk2-PvCo.js";import"./index-C9NLr5O0.js";import"./index-D9YXYt3K.js";import"./useEventCallback-BcRGgLnB.js";import"./SkeletonBar-BLCNwj4V.js";import"./LoadingCell-vFBraOHC.js";import"./ColumnConfigDialog-CiSmf7C5.js";import"./DraggableList-C3pcPIXV.js";import"./search-KIDsIAAK.js";import"./Input-WST8cByM.js";import"./useControlled-CMyIOoxO.js";import"./Button-BPy55ub1.js";import"./small-cross-CMkmo5Aj.js";import"./ActionButton-BQ5ayi6b.js";import"./Checkbox-BB2uWGgx.js";import"./useValueChanged-DuqgSL6S.js";import"./CollapsiblePanel-CEbB2UNo.js";import"./MultiColumnSortDialog-x4LFZ01l.js";import"./MenuTrigger-DA2hCRC6.js";import"./CompositeItem-DXFhogU1.js";import"./ToolbarRootContext-Bp3YN5W7.js";import"./getDisabledMountTransitionStyles-B7vaymp7.js";import"./getPseudoElementBounds-Dd8-3VJH.js";import"./chevron-down-DTO6IXlJ.js";import"./index-BrHupWVl.js";import"./error-CIWz4OVj.js";import"./BaseCbacBanner-BJR98Az1.js";import"./makeExternalStore-BiTIhgiy.js";import"./Tooltip-C8FjudTm.js";import"./PopoverPopup-CXhQbr-D.js";import"./debounce-DK8acQf4.js";import"./useOsdkClient-BA2LnazC.js";import"./tick-D-sBs8EZ.js";import"./DropdownField-BYVn9WPt.js";import"./isEqual-D0Kz1RWM.js";import"./withOsdkMetrics-CQbNyfnl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
