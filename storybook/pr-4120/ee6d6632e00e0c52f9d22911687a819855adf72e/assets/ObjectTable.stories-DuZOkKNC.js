import{j as i}from"./iframe-DTMqKPBE.js";import{O as p}from"./object-table-BsHUN6wF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BN-QvWSH.js";import"./preload-helper-CjsYpY57.js";import"./Table-DU03s7G2.js";import"./index-UDd9WuYK.js";import"./Dialog-BCGY3t42.js";import"./cross-B4qzvymc.js";import"./svgIconContainer-CTrmoxuh.js";import"./useBaseUiId-CEeKBGAz.js";import"./InternalBackdrop-BBkZ1Zk6.js";import"./composite-ythbHTkl.js";import"./index-C4q2yfqG.js";import"./index-JW1fQ_Y7.js";import"./index-a5K6iVF8.js";import"./useEventCallback-DtDN3sTJ.js";import"./SkeletonBar-B8XEOwQs.js";import"./LoadingCell-1n2Faz1K.js";import"./ColumnConfigDialog-DBo2NVl6.js";import"./DraggableList-JhsJuV4q.js";import"./search-DI2V8WRZ.js";import"./Input-7TR5u0Qr.js";import"./useControlled-BHnYSqNh.js";import"./Button-xDEOgU6J.js";import"./small-cross-CsVdUc7Z.js";import"./ActionButton-hkXpDER8.js";import"./Checkbox-CQ4B7qvq.js";import"./useValueChanged-pTbCnzad.js";import"./CollapsiblePanel-BI6FTHdI.js";import"./MultiColumnSortDialog-48DxKrQQ.js";import"./MenuTrigger-Cimzkx02.js";import"./CompositeItem-vKvJJfWL.js";import"./ToolbarRootContext-BFkkbk8n.js";import"./getDisabledMountTransitionStyles-CkPdKkG_.js";import"./getPseudoElementBounds-JkpSFn6Z.js";import"./chevron-down-CHkr5iXo.js";import"./index-BsUTfLWI.js";import"./error-DhhuqABX.js";import"./BaseCbacBanner-oJ-bR1A-.js";import"./makeExternalStore-BqhBup0t.js";import"./Tooltip-hCwJnzIt.js";import"./PopoverPopup-DWI1XAxj.js";import"./debounce-BYCLDSg8.js";import"./useOsdkClient-172IoC-V.js";import"./tick-BzPsR4V6.js";import"./DropdownField-CyxvPr-x.js";import"./isEqual-CnGd_Xos.js";import"./withOsdkMetrics-C9k-iTWj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
